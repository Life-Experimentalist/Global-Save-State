# 🎮 Global Save State

Create gaming-style save points in VS Code! Save your progress before trying risky experiments, just like in video games.

## 🚀 Quick Start

1. **Install**: Search "Global Save State" in VS Code Extensions
2. **Create Save**: `Ctrl+Shift+S` → Enter name → Done!
3. **Restore Save**: `Ctrl+Alt+R` → Select save point → Restored!

## 📖 How to Use

### Creating Save Points
- Press `Ctrl+Shift+S` (or `Cmd+Shift+S` on Mac)
- Enter a descriptive name like "Working login system"
- Press Enter to save

### Restoring Save Points
- Press `Ctrl+Alt+R` (or `Cmd+Alt+R` on Mac)
- Select the save point you want from the list
- Confirm to restore your project to that state

### When to Save
- ✅ Before trying experimental code
- ✅ After completing a working feature
- ✅ When following tutorials step-by-step
- ❌ When code is broken or incomplete

## ⚙️ Settings

Configure the extension by searching "Global Save State" in VS Code settings:

```json
{
    "globalSaveState.maxSavePoints": 50,
    "globalSaveState.excludePatterns": [
        "**/node_modules/**",
        "**/.git/**",
        "**/dist/**",
        "**/build/**"
    ]
}
```

## ❓ FAQ

**Q: How is this different from Git?**
A: Git is for team collaboration and long-term version control. Global Save State is for quick personal checkpoints while experimenting.

**Q: Where are save points stored?**
A: In `.vscode/globalSaveStates.json` in your project folder.

**Q: Can I use this with Git?**
A: Yes! They work great together. Use Git for commits, Global Save State for experiments.

**Q: What if save points don't work?**
A: Check that you have write permissions to your project folder and the extension is enabled.

## 🎮 Gaming Philosophy

Think of it like video game save points:
- **Save before boss fights** = Save before difficult features
- **Save at checkpoints** = Save when features work
- **Experiment fearlessly** = You can always reload your save!

---

**🐛 Found a bug?** [Report it here](https://github.com/Life-Experimentalist/Global-Save-State/issues)

**💡 Have an idea?** [Suggest it here](https://github.com/Life-Experimentalist/Global-Save-State/issues)