import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";
import * as fsp from "fs/promises";
import { TextDecoder } from "util";

interface SavePoint {
  name: string;
  timestamp: number;
  files: { [filePath: string]: string };
}

const SAVE_STATE_KEY = "globalSaveState.savePoints";

function getWorkspaceFolders(): readonly vscode.WorkspaceFolder[] {
  return vscode.workspace.workspaceFolders || [];
}

function getExcludePatterns(): string[] {
  const config = vscode.workspace.getConfiguration("globalSaveState");
  return config.get<string[]>("excludePatterns", []);
}

// Utility to read per-folder .vscode/settings.json for exclusion patterns
function getFolderExcludePatterns(folder: vscode.WorkspaceFolder): string[] {
  try {
    const settingsPath = path.join(
      folder.uri.fsPath,
      ".vscode",
      "settings.json"
    );
    if (fs.existsSync(settingsPath)) {
      const settings = JSON.parse(fs.readFileSync(settingsPath, "utf8"));
      if (settings["globalSaveState.excludePatterns"]) {
        return settings["globalSaveState.excludePatterns"];
      }
    }
  } catch (e) {
    // Ignore parse errors
  }
  // Fallback to global config or default
  return getExcludePatterns();
}

// Utility to get per-folder save point file
function getSavePointFile(folder: vscode.WorkspaceFolder): string {
  return path.join(folder.uri.fsPath, ".vscode", "globalSaveState.json");
}

// Utility to ensure globalSaveState.json is added to ignore files
async function ensureIgnoreEntries(folder: vscode.WorkspaceFolder) {
  const gitignorePath = path.join(folder.uri.fsPath, ".gitignore");
  const vscodeignorePath = path.join(folder.uri.fsPath, ".vscodeignore");
  const ignoreEntry = ".vscode/globalSaveState.json";

  // Helper function to add entry to ignore file if not present
  async function addToIgnoreFile(filePath: string) {
    try {
      let content = "";
      try {
        content = await fsp.readFile(filePath, "utf8");
      } catch (err) {
        // file may not exist - we'll create it
        content = "";
      }

      // Check if entry already exists
      if (!content.includes(ignoreEntry)) {
        // Add entry with proper line ending
        const newContent = content.trim() + (content.trim() ? "\n" : "") + ignoreEntry + "\n";
        await fsp.writeFile(filePath, newContent, "utf8");
      }
    } catch (e) {
      // Ignore errors - file might not be writable
    }
  }

  await Promise.all([addToIgnoreFile(gitignorePath), addToIgnoreFile(vscodeignorePath)]);
}

function getMaxSavePoints(): number {
  const config = vscode.workspace.getConfiguration("globalSaveState");
  return config.get<number>("maxSavePoints", 50);
}

async function createSavePoint(context: vscode.ExtensionContext) {
  const folders = getWorkspaceFolders();
  if (folders.length === 0) {
    vscode.window.showWarningMessage("No workspace folders found.");
    return;
  }
  let folderPick: vscode.WorkspaceFolder | undefined = folders[0];
  if (folders.length > 1) {
    const pick = await vscode.window.showQuickPick(
      folders.map((f) => ({
        label: f.name,
        description: f.uri.fsPath,
        folder: f,
      })),
      { placeHolder: "Select a workspace folder to create a save point for" }
    );
    if (!pick) return;
    folderPick = pick.folder;
  }
  const folder = folderPick;
  const name = await vscode.window.showInputBox({
    prompt: `Enter a name for the save point in '${folder.name}'`,
    placeHolder: "e.g. Working State, Before Refactor, etc.",
  });
  if (!name) {
    vscode.window.showWarningMessage("Save point creation cancelled.");
    return;
  }
  const excludePatterns = getFolderExcludePatterns(folder);
  let savePoints: SavePoint[] = [];
  const savePointFile = getSavePointFile(folder);
  const isFirstSavePoint = !fs.existsSync(savePointFile);

  if (fs.existsSync(savePointFile)) {
    try {
      savePoints = JSON.parse(fs.readFileSync(savePointFile, "utf8"));
    } catch {}
  }
  let filesToSave: { [filePath: string]: string } = {};
  // Build an exclude glob for vscode.workspace.findFiles. Use {a,b,c} syntax to combine patterns
  const excludeGlob = excludePatterns && excludePatterns.length ? "{" + excludePatterns.join(",") + "}" : undefined;
  // Use VS Code workspace API to find files asynchronously
  let uris: vscode.Uri[] = [];
  try {
    uris = await vscode.workspace.findFiles("**/*", excludeGlob);
  } catch (e) {
    uris = [];
  }

  // Limit concurrency to avoid overwhelming the extension host with many simultaneous reads
  const CONCURRENCY = 100;
  for (let i = 0; i < uris.length; i += CONCURRENCY) {
    const chunk = uris.slice(i, i + CONCURRENCY);
    const reads = chunk.map(async (uri) => {
      // Compute relative path
      const relPath = path.relative(folder.uri.fsPath, uri.fsPath).replace(/\\/g, "/");
      try {
  const data = await vscode.workspace.fs.readFile(uri);
  const content = new TextDecoder("utf-8").decode(data);
        filesToSave[relPath] = content;
      } catch (e) {
        // Ignore unreadable files
      }
    });
    await Promise.all(reads);
  }
  // Check if files are identical to last save point
  const lastSave = savePoints[savePoints.length - 1];
  let isIdentical = false;
  if (lastSave) {
    isIdentical =
      Object.keys(filesToSave).length === Object.keys(lastSave.files).length &&
      Object.entries(filesToSave).every(([k, v]) => lastSave.files[k] === v);
  }
  const savePoint: SavePoint = {
    name,
    timestamp: Date.now(),
    files: isIdentical ? {} : filesToSave,
  };
  savePoints.push(savePoint);
  while (savePoints.length > getMaxSavePoints()) {
    savePoints.shift();
  }
  try {
    await fsp.mkdir(path.dirname(savePointFile), { recursive: true });
    await fsp.writeFile(savePointFile, JSON.stringify(savePoints, null, 2), "utf8");

    // Add to ignore files if this is the first save point
    if (isFirstSavePoint) {
      // fire-and-forget but await to be safe
      await ensureIgnoreEntries(folder);
    }
  } catch (e) {
    // ignore write errors
  }
  vscode.window.showInformationMessage(
    `💾 Save point: "${name}" created for folder '${folder.name}'${
      isIdentical ? " (no changes detected, empty save point)" : ""
    }.`
  );
}

async function restoreSavePoint(context: vscode.ExtensionContext) {
  const folders = getWorkspaceFolders();
  if (folders.length === 0) {
    vscode.window.showWarningMessage("No workspace folders found.");
    return;
  }
  let folderPick: vscode.WorkspaceFolder | undefined = folders[0];
  if (folders.length > 1) {
    const pick = await vscode.window.showQuickPick(
      folders.map((f) => ({
        label: f.name,
        description: f.uri.fsPath,
        folder: f,
      })),
      { placeHolder: "Select a workspace folder to restore" }
    );
    if (!pick) return;
    folderPick = pick.folder;
  }
  const folder = folderPick;
  const savePointFile = getSavePointFile(folder);
  let savePoints: SavePoint[] = [];
  try {
    const raw = await fsp.readFile(savePointFile, "utf8");
    savePoints = JSON.parse(raw);
  } catch (e) {
    savePoints = [];
  }
  if (savePoints.length === 0) {
    vscode.window.showWarningMessage(
      `No save points available for folder '${folder.name}'.`
    );
    return;
  }
  const items = savePoints
    .map((sp, i) => ({
      label: sp.name,
      description: new Date(sp.timestamp).toLocaleString(),
      index: i,
    }))
    .reverse();
  const pick = await vscode.window.showQuickPick(items, {
    placeHolder: `Select a save point to restore for folder '${folder.name}'`,
  });
  if (!pick) return;
  const savePoint = savePoints[pick.index];
  if (!savePoint.files || Object.keys(savePoint.files).length === 0) {
    vscode.window.showWarningMessage(
      "This save point is empty (no changes from previous)."
    );
    return;
  }
  // Write files in chunks to limit concurrency
  const entries = Object.entries(savePoint.files);
  const CONCURRENCY = 100;
  for (let i = 0; i < entries.length; i += CONCURRENCY) {
    const chunk = entries.slice(i, i + CONCURRENCY);
    const writes = chunk.map(async ([relPath, content]) => {
      const absPath = path.join(folder.uri.fsPath, relPath);
      try {
        await fsp.mkdir(path.dirname(absPath), { recursive: true });
        await fsp.writeFile(absPath, content, "utf8");
      } catch (e) {
        // Ignore write errors
      }
    });
    await Promise.all(writes);
  }
  vscode.window.showInformationMessage(
    `Restored save point "${savePoint.name}" for folder '${folder.name}'.`
  );
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("globalSaveState.createSavePoint", () =>
      createSavePoint(context)
    ),
    vscode.commands.registerCommand("globalSaveState.restoreSavePoint", () =>
      restoreSavePoint(context)
    )
  );
}

export function deactivate() {}

