// build.js
// Enhanced build script for Global Save State VS Code Extension
// Provides better user interaction and optimized publishing workflow

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Colors for better terminal output
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  green: "\x1b[32m",
  blue: "\x1b[34m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function run(cmd, description = "") {
  if (description) {
    log(`\n${description}`, colors.cyan);
  }
  try {
    execSync(cmd, { stdio: "inherit" });
    return true;
  } catch (error) {
    log(`❌ Error: ${error.message}`, colors.red);
    return false;
  }
}

function cleanOutDir() {
  const rootDir = path.join(__dirname, "..");
  const outDir = path.join(rootDir, "out");
  if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true, force: true });
    log("🧹 Cleaned output directory", colors.yellow);
  }
}

function getPackageInfo() {
    const pkg = require("../package.json");
    return {
        name: pkg.name,
        version: pkg.version,
        publisher: pkg.publisher,
        displayName: pkg.displayName,
    };
}

function checkDependencies() {
    log("🔍 Checking dependencies...", colors.cyan);

    // Check if required packages are installed
    const requiredPackages = ["webpack", "ts-loader", "typescript"];
    const pkg = require("../package.json");
    const devDeps = pkg.devDependencies || {};

    let allInstalled = true;
    for (const dep of requiredPackages) {
        if (!devDeps[dep]) {
            log(`   ❌ Missing: ${dep}`, colors.red);
            allInstalled = false;
        } else {
            log(`   ✓ Found: ${dep}`, colors.green);
        }
    }

    return allInstalled;
}

function showBuildInfo() {
    const info = getPackageInfo();
    log(`\n${"=".repeat(60)}`, colors.bright);
    log(`🎮 BUILDING: ${info.displayName}`, colors.bright + colors.green);
    log(`📦 Package: ${info.name}`, colors.blue);
    log(`🏷️  Version: ${info.version}`, colors.blue);
    log(`👤 Publisher: ${info.publisher}`, colors.blue);
    log(`${"=".repeat(60)}\n`, colors.bright);
}

function main() {
    showBuildInfo();

    // Check dependencies first
    if (!checkDependencies()) {
        log(
            "❌ Missing required dependencies. Please run 'npm install'",
            colors.red
        );
        process.exit(1);
    }

    const info = getPackageInfo();
    const rootDir = path.join(__dirname, "..");

    // Step 1: Clean output directory
    log("🧹 STEP 1: Cleaning build environment...", colors.bright);
    cleanOutDir();

    // Step 2: Build with webpack in production mode
    log("\n⚙️  STEP 2: Building with webpack...", colors.bright);
    if (!run("npm run package", "Building optimized bundle...")) {
        log("❌ Build failed!", colors.red);
        process.exit(1);
    }

    // Step 3: Package the extension
    log("\n📦 STEP 3: Packaging extension...", colors.bright);
    if (!run("npx vsce package", "Creating VSIX package...")) {
        log("❌ Packaging failed!", colors.red);
        process.exit(1);
    }

    // Step 4: Move VSIX to releases directory
    log("\n📁 STEP 4: Organizing release files...", colors.bright);
    const srcVsix = path.join(rootDir, `${info.name}-${info.version}.vsix`);
    const releasesDir = path.join(rootDir, "releases");

    if (!fs.existsSync(releasesDir)) {
        fs.mkdirSync(releasesDir, { recursive: true });
        log("📁 Created releases directory", colors.yellow);
    }

    const destVsix = path.join(
        releasesDir,
        `GlobalSaveState_v${info.version}.vsix`
    );

    if (fs.existsSync(srcVsix)) {
        // Remove old version if exists
        if (fs.existsSync(destVsix)) {
            fs.unlinkSync(destVsix);
            log("🗑️  Removed old version", colors.yellow);
        }

        fs.renameSync(srcVsix, destVsix);

        // Get file size
        const stats = fs.statSync(destVsix);
        const sizeKB = Math.round(stats.size / 1024);

        log(`✅ VSIX created: ${destVsix}`, colors.green);
        log(`📏 File size: ${sizeKB} KB`, colors.blue);
    } else {
        log("⚠️  VSIX file not found after packaging", colors.yellow);
        process.exit(1);
    }

    // Step 5: Success summary
    log(`\n${"=".repeat(60)}`, colors.bright);
    log(`🎉 BUILD SUCCESSFUL!`, colors.bright + colors.green);
    log(`${"=".repeat(60)}`, colors.bright);
    log(`📦 Extension: ${info.displayName} v${info.version}`, colors.blue);
    log(
        `📁 Location: releases/GlobalSaveState_v${info.version}.vsix`,
        colors.blue
    );
    log(`🚀 Ready for VS Code Marketplace!`, colors.green);
    log(`\n💡 To publish: npx vsce publish`, colors.cyan);
    log(
        `💡 To install locally: code --install-extension releases/GlobalSaveState_v${info.version}.vsix`,
        colors.cyan
    );
    log(`${"=".repeat(60)}\n`, colors.bright);
}

// Run the main function
main();