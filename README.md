# 🎮 Save-Sync
### *Save Points for Your Code - Just Like in Games!*

<div align="center">

![Save-Sync Logo](icon.jpg)

**Create checkpoints in your code projects just like save points in video games!**

*Perfect for experiments, tutorials, learning, and quick prototypes where full version control feels like overkill*

[![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/VKrishna04.global-save-state)](https://marketplace.visualstudio.com/items?itemName=VKrishna04.global-save-state)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/VKrishna04.global-save-state)](https://marketplace.visualstudio.com/items?itemName=VKrishna04.global-save-state)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/VKrishna04.global-save-state)](https://marketplace.visualstudio.com/items?itemName=VKrishna04.global-save-state)

</div>

---

## 🎯 Why Save Points for Code?

Remember playing **Zelda** and hitting that checkpoint right before `Ganondorf`? Or **`Dark Souls`** where you desperately needed that bonfire before the boss? **`Save-Sync`** brings that same peace of mind to coding!

### 🎮 Perfect Gaming Scenarios:

| 🎯 **Game Situation**           | 💻 **Code Equivalent**             |
| ------------------------------ | --------------------------------- |
| 🏰 **Save before boss fight**   | Save before major refactoring     |
| 🧪 **Try different strategies** | Experiment with new approaches    |
| 📚 **Chapter checkpoints**      | Milestone completion in tutorials |
| 🎨 **Creative experimentation** | Art projects, creative coding     |
| ⚡ **Speed runs**               | Rapid prototyping cycles          |
| 🔄 **Multiple playthroughs**    | Different implementation attempts |

### 🚀 When to Use Your Code Save Points:
- **🧪 Experiments**: Try wild ideas without fear - restore if they don't work
- **📚 Learning**: Checkpoint your progress while following tutorials
- **🚀 Prototyping**: Quick saves for rapid iteration cycles
- **🔧 Refactoring**: Save before major changes, restore if things break
- **🎨 Creative Coding**: Art projects, game jams, creative experiments
- **📝 Documentation**: Save states while writing examples or demos

### 🚫 When to Use Git Instead:
- Large production codebases
- Team collaboration projects
- Code that needs detailed history tracking
- Professional development workflows

## ✨ Game Mechanics for Code

### 🎮 Just Like Your Favorite Games

| 🎯 **Game Feature**       | 💻 **Save-Sync** | 🔥 **Why It's Awesome**       |
| ------------------------ | ----------------------- | ---------------------------- |
| 💾 **Quick Save**         | `Ctrl+Shift+S`          | One keystroke, one snapshot  |
| 🔄 **Quick Load**         | `Ctrl+Alt+R`            | Pick a save point, it writes |
| 📍 **Named Saves**        | "Before AI Integration" | Descriptive checkpoint names |
| 🎯 **Save Slots**         | 50 by default           | Oldest is dropped past that  |
| 📜 **Overwrite on Load**  | Saved files rewritten   | Files added since stay put   |
| 🎪 **Multiple Campaigns** | Multi-root workspaces   | Independent save systems     |

### 🚀 Core Features

- **💾 Create Named Save Points**: Capture the text of every non-excluded file under a custom name
- **🔄 Restore Over Your Files**: Rewrite the files a save point captured back into the folder
- **📁 Multi-Root Support**: Each workspace folder maintains its own save points independently
- **⚙️ Flexible Exclusions**: Configure exclusion patterns per folder via `.vscode/settings.json`
- **⚡ Duplicate Detection**: A save point identical to the one before it is stored empty, and restoring it does nothing
- **🎯 Not a VCS**: Lightweight alternative to version control for quick state management

## 📦 Installation

### 🎮 From VS Code Marketplace (Recommended)

The Marketplace listing is still titled **Global Save State** — the rename to Save-Sync
lands on the next publish — so install it by id rather than by searching:

```bash
code --install-extension VKrishna04.global-save-state
```

Or open the [Marketplace page](https://marketplace.visualstudio.com/items?itemName=VKrishna04.global-save-state) and click **Install**.

### 📁 From VSIX File
1. Download the `.vsix` file from [releases](https://github.com/Life-Experimentalist/Save-Sync/releases)
2. Open VS Code
3. Run `Extensions: Install from VSIX...` from Command Palette
4. Select the downloaded `.vsix` file

## 🎮 Quick Start Guide - Your First Save Point!

### 🕹️ Tutorial Mode (5 minutes)

**Step 1: Set the Scene** 🎬
```bash
# Open any project in VS Code
# Make some changes to your files
# Now you're ready for your first checkpoint!
```

**Step 2: Create Your First Save Point** 💾
1. Press `Ctrl+Shift+S` (your "Save Game" button)
2. Name it: **"Tutorial Checkpoint 1"**
3. Watch the magic happen! ✨

**Step 3: Make Some Changes** 🔨
```javascript
// Add some experimental code
function experimentalFeature() {
    // This might break everything...
    return 'risky code here';
}
```

**Step 4: Create Another Checkpoint** 📍
1. Press `Ctrl+Shift+S` again
2. Name it: **"Added Experimental Feature"**

**Step 5: Oh No! Something Broke!** 💥
1. Press `Ctrl+Alt+R` (your "Load Game" button)
2. Select **"Tutorial Checkpoint 1"**
3. **BOOM!** 🎉 You're back to safety!

> 💡 **Pro Gamer Tip**: Use descriptive save names like "Before Adding Database", "Working Login System", or "Pre-Boss-Fight-Refactor"

## 🎯 Advanced Usage
### 💾 Creating Save Points (Quick Save)
- **🎮 Keyboard**: `Ctrl+Shift+S` (or `Cmd+Shift+S` on Mac)
- **📝 Command Palette**: `Save-Sync: Create Save Point`

**Multi-Workspace Projects:**
1. If multiple workspace folders are open, select which folder to save
2. Enter a descriptive name for your save point (think epic checkpoint names!)
3. The extension captures all files (excluding configured patterns)

### 🔄 Loading Save Points (Quick Load)
- **🎮 Keyboard**: `Ctrl+Alt+R` (or `Cmd+Alt+R` on Mac)
- **📝 Command Palette**: `Save-Sync: Restore Save Point`

**Restore Process:**
1. If multiple workspace folders are open, select which folder to restore
2. Choose from your list of save points (sorted by newest first)
3. Every file the save point captured is written back over whatever is there now

> ⚠️ **Boss Fight Warning**: Loading a save point overwrites your current work with no
> confirmation prompt and no backup. Create a save point first if you want to keep it.
> Read the "What a Restore Actually Does" section below before you rely on this.

## ⚠️ What a Restore Actually Does

A restore is an **overlay, not a rollback**. Read this before you trust it with work you
cannot lose. Every point below is the behaviour of the current code, not an aspiration.

**What is captured.** When you create a save point the extension walks every file the
`**/*` glob matches in the chosen workspace folder, minus your exclusion patterns, decodes
each one as UTF-8 text and stores the string. Binary files (images, fonts, `.vsix`, `.pdf`)
go through the same text decode and come back corrupted — exclude them.

**Where it is stored.** A plain JSON file on disk at `.vscode/globalSaveState.json` inside
each workspace folder, holding an array of `{ name, timestamp, files }`. Nothing is kept in
VS Code’s workspace or global storage, so the save points travel with the folder and are
readable and editable by hand.

**Your ignore files are edited.** The first time you create a save point in a folder, the
extension appends `.vscode/globalSaveState.json` to that folder’s `.gitignore` and
`.vscodeignore`, **creating either file if it does not exist**.

**What a restore writes.** For every file recorded in the save point, the parent directory
is created if missing and the file is overwritten with the stored text. That is the whole
operation. Specifically:

- **Nothing is ever deleted.** A file you created after the save point is still there
  afterwards. To get back to a genuinely clean state you have to delete those yourself.
- **A file you deleted since the save point is recreated.**
- **There is no conflict detection.** Unsaved editor buffers, newer edits, generated output —
  if the path was in the save point, it is overwritten. No diff, no prompt, no merge.
- **There is no backup.** The overwritten content is gone unless it is in another save point
  or in git.
- **Write failures are silent.** If a file cannot be written (locked, read-only, permissions)
  the restore skips it and still reports success, so a restore can be partial without saying so.

**Save points are evicted silently.** Once the count passes `globalSaveState.maxSavePoints`
(default 50), the oldest are dropped without warning as new ones are created.

**Identical snapshots are stored empty.** If nothing changed since the previous save point,
the new one records no files; restoring it warns that it is empty and writes nothing.

**Exclusion patterns are read as strict JSON.** The per-folder `.vscode/settings.json` is
parsed with `JSON.parse`, so the `//` comments VS Code normally allows in that file will make
the parse fail — silently falling back to your global `globalSaveState.excludePatterns`.

## ⚙️ Configuration

### Per-Folder Settings
Create `.vscode/settings.json` in any workspace folder:

```json
{
  "globalSaveState.excludePatterns": [
    "**/node_modules/**",
    "**/.git/**",
    "**/dist/**",
    "**/build/**",
    "**/.vscode/**",
    "**/out/**",
    "**/*.log"
  ]
}
```

### Global Settings
- **Max Save Points**: Configure maximum save points to keep (default: 50)
- **Default Exclusions**: Set global exclusion patterns

## 📋 Requirements

- VS Code 1.74.0 or higher
- Node.js 16.0.0 or higher

## 🔧 Development

```bash
# Clone the repository
git clone https://github.com/Life-Experimentalist/Save-Sync

# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Run tests
npm test

# Build extension package
npm run build
```

## 📖 Documentation

- [Architecture](docs/ARCHITECTURE.md): System design and diagrams
- [Roadmap](docs/ROADMAP.md): Milestones and future plans
- [TODO](docs/TODO.md): Tasks and bugs
- [Changelog](CHANGELOG.md): Release notes
- [License](LICENSE.md): License information
- [Code of Conduct](docs/CODE_OF_CONDUCT.md): Community guidelines

## 🤝 Contributing

See [Contributing Guide](.github/ISSUE_TEMPLATE/CONTRIBUTING.md) for details on:
- Code style guidelines
- How to submit pull requests
- Bug reporting process

## 📄 License

Licensed under the [Apache 2.0 License](LICENSE.md).

## 🐛 Issues & Support

- Report bugs: [GitHub Issues](https://github.com/Life-Experimentalist/Save-Sync/issues)
- Feature requests: [GitHub Issues](https://github.com/Life-Experimentalist/Save-Sync/issues)
- Email: krishnagsvv@gmail.com

---

<div align="center">

**🎮 Happy Coding with Save Points! 🎉**

*Made with ❤️ for developers who miss game checkpoints in their code*

[🌟 Star on GitHub](https://github.com/Life-Experimentalist/Save-Sync) | [📦 VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=VKrishna04.global-save-state)

</div>
