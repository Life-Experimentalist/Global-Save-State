# 🎮 Global Save State
### *Save Points for Your Code - Just Like in Games!*

<div align="center">

![Global Save State Logo](icon.jpg)

**Create checkpoints in your code projects just like save points in video games!**

*Perfect for experiments, tutorials, learning, and quick prototypes where full version control feels like overkill*

[![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/VKrishna04.global-save-state)](https://marketplace.visualstudio.com/items?itemName=VKrishna04.global-save-state)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/VKrishna04.global-save-state)](https://marketplace.visualstudio.com/items?itemName=VKrishna04.global-save-state)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/VKrishna04.global-save-state)](https://marketplace.visualstudio.com/items?itemName=VKrishna04.global-save-state)

</div>

---

## 🎯 Why Save Points for Code?

Remember playing **Zelda** and hitting that checkpoint right before Ganondorf? Or **Dark Souls** where you desperately needed that bonfire before the boss? **Global Save State** brings that same peace of mind to coding!

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

| 🎯 **Game Feature**       | 💻 **Global Save State** | 🔥 **Why It's Awesome**       |
| ------------------------ | ----------------------- | ---------------------------- |
| 💾 **Quick Save**         | `Ctrl+Shift+S`          | Instant checkpoint creation  |
| 🔄 **Quick Load**         | `Ctrl+Alt+R`            | Instant project restoration  |
| 📍 **Named Saves**        | "Before AI Integration" | Descriptive checkpoint names |
| 🎯 **Save Slots**         | Up to 50 per project    | Multiple restore points      |
| ⚡ **No Loading Screens** | Instant restore         | Zero wait time               |
| 🎪 **Multiple Campaigns** | Multi-root workspaces   | Independent save systems     |

### 🚀 Core Features

- **💾 Create Named Save Points**: Capture your entire project state with custom names
- **🔄 Instant Restore**: Quickly restore to any previous save point
- **📁 Multi-Root Support**: Each workspace folder maintains its own save points independently
- **⚙️ Flexible Exclusions**: Configure exclusion patterns per folder via `.vscode/settings.json`
- **⚡ Smart Detection**: Automatically handles empty save points when no changes are detected
- **🎯 Not a VCS**: Lightweight alternative to version control for quick state management

## 📦 Installation

### 🎮 From VS Code Marketplace (Recommended)
1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X`)
3. Search for "**Global Save State**"
4. Click **Install**
5. Start creating save points! 🎉

### 📁 From VSIX File
1. Download the `.vsix` file from [releases](https://github.com/Life-Experimentalist/global-save-state/releases)
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
- **📝 Command Palette**: `Global Save State: Create Save Point`

**Multi-Workspace Projects:**
1. If multiple workspace folders are open, select which folder to save
2. Enter a descriptive name for your save point (think epic checkpoint names!)
3. The extension captures all files (excluding configured patterns)

### 🔄 Loading Save Points (Quick Load)
- **🎮 Keyboard**: `Ctrl+Alt+R` (or `Cmd+Alt+R` on Mac)
- **📝 Command Palette**: `Global Save State: Restore Save Point`

**Restore Process:**
1. If multiple workspace folders are open, select which folder to restore
2. Choose from your list of save points (sorted by newest first)
3. Your project is instantly restored to that exact state

> ⚠️ **Boss Fight Warning**: Just like in games, loading a save point will overwrite your current progress! Save first if you want to keep changes.

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
git clone https://github.com/Life-Experimentalist/global-save-state

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
- [Changelog](docs/CHANGELOG.md): Release notes
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

- Report bugs: [GitHub Issues](https://github.com/Life-Experimentalist/global-save-state/issues)
- Feature requests: [GitHub Issues](https://github.com/Life-Experimentalist/global-save-state/issues)
- Email: krishnagsvv@gmail.com

---

<div align="center">

**🎮 Happy Coding with Save Points! 🎉**

*Made with ❤️ for developers who miss game checkpoints in their code*

[🌟 Star on GitHub](https://github.com/Life-Experimentalist/global-save-state) | [📦 VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=Life-Experimentalist.global-save-state)

</div>
