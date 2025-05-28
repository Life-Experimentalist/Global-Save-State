# 📦 Installation Guide

Welcome to Global Save State! Get your gaming-style save points set up in VS Code in just a few minutes.

## 🎯 Quick Install (Recommended)

### **Method 1: VS Code Marketplace**
1. **Open VS Code**
2. **Press `Ctrl+Shift+X`** (or `Cmd+Shift+X` on Mac) to open Extensions
3. **Search for**: `"Global Save State"`
4. **Click Install** on the extension by **VKrishna04**
5. **Ready to go!** 🎮

### **Method 2: Command Line**
```bash
code --install-extension VKrishna04.global-save-state
```

### **Method 3: Extensions View**
1. Open **View** → **Extensions**
2. Search: `VKrishna04.global-save-state`
3. Click **Install**

## ⚙️ Initial Setup

### **1. Verify Installation**
After installation, you should see:
- **Command Palette** (`Ctrl+Shift+P`): Type "Global Save" to see commands
- **Keyboard Shortcuts**: `Ctrl+Shift+S` for save, `Ctrl+Alt+R` for restore

### **2. Test Installation**
1. **Open any project** in VS Code
2. **Press `Ctrl+Shift+S`**
3. **Enter save point name**: "Installation Test"
4. **Success!** You should see a confirmation message

### **3. Configure Settings (Optional)**
Go to **File** → **Preferences** → **Settings** and search for "Global Save State":

```json
{
    "globalSaveState.excludePatterns": [
        "**/node_modules/**",
        "**/.git/**",
        "**/dist/**",
        "**/build/**",
        "**/.vscode/**",
        "**/out/**"
    ],
    "globalSaveState.maxSavePoints": 50
}
```

## 🎮 First Save Point Tutorial

### **Create Your First Checkpoint**
1. **Make some changes** to your code
2. **Press `Ctrl+Shift+S`** (Quick Save hotkey)
3. **Enter name**: "Before Boss Fight"
4. **See the magic!** ✨

### **Restore a Save Point**
1. **Make more changes** (or break something!)
2. **Press `Ctrl+Alt+R`** (Quick Restore hotkey)
3. **Select your save point** from the list
4. **Boom!** You're back to your checkpoint

## ✅ Verification Checklist

- [ ] Extension appears in Extensions list
- [ ] Commands work in Command Palette
- [ ] Keyboard shortcuts respond
- [ ] Can create save points successfully
- [ ] Can restore save points successfully
- [ ] Settings are accessible

## ❓ Installation Troubleshooting

### **Extension Not Found**
- Check you're searching for: `"Global Save State"` or `VKrishna04.global-save-state`
- Ensure you have internet connection
- Try restarting VS Code

### **Commands Not Working**
- Reload VS Code window: `Ctrl+Shift+P` → "Developer: Reload Window"
- Check if extension is enabled in Extensions view
- Verify VS Code version is 1.74.0+

### **Keyboard Shortcuts Conflict**
- Go to **File** → **Preferences** → **Keyboard Shortcuts**
- Search for "globalSaveState"
- Reassign if needed

### **Permission Issues**
- Ensure you have write permissions to your project folder
- Try with a simple test project first
- Check if antivirus is blocking file operations

## 🎯 Next Steps

✅ **Installation Complete!**

**Ready for your first gaming session?**
- 🚀 [Create Your First Save Point](First-Save-Point)
- ⌨️ [Learn Keyboard Shortcuts](Keyboard-Shortcuts)
- ⚙️ [Customize Settings](Extension-Settings)
- 🎮 [Best Practices](Best-Practices)

---

**🎉 Welcome to the game! May your code experiments be bold and your save points be frequent!**