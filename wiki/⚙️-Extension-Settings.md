# ⚙️ Extension Settings

Customize Save-Sync to perfectly fit your gaming-style workflow! Like any good game, you can adjust the settings to match your playstyle.

## 🎮 Quick Settings Access

### **VS Code Settings**
1. **Open Settings**: `Ctrl+,` (or `Cmd+,` on Mac)
2. **Search**: `"globalSaveState"`
3. **Configure**: Adjust settings to your liking

### **Settings JSON**
Access raw settings: `Ctrl+Shift+P` → "Preferences: Open Settings (JSON)"

## ⚙️ Core Settings

### **globalSaveState.excludePatterns**
**What it does**: Defines which files/folders to ignore when creating save points.

**Default value**:
```json
{
    "globalSaveState.excludePatterns": [
        "**/node_modules/**",
        "**/.git/**",
        "**/dist/**",
        "**/build/**",
        "**/.vscode/**",
        "**/out/**"
    ]
}
```

**Common customizations**:
```json
{
    "globalSaveState.excludePatterns": [
        "**/node_modules/**",
        "**/.git/**",
        "**/dist/**",
        "**/build/**",
        "**/.vscode/**",
        "**/out/**",
        "**/*.log",           // Exclude log files
        "**/temp/**",         // Exclude temp folders
        "**/.cache/**",       // Exclude cache folders
        "**/target/**",       // Java/Maven builds
        "**/bin/**",          // Binary folders
        "**/__pycache__/**",  // Python cache
        "**/coverage/**",     // Test coverage
        "**/.next/**",        // Next.js builds
        "**/vendor/**"        // PHP/Composer dependencies
    ]
}
```

### **globalSaveState.maxSavePoints**
**What it does**: Maximum number of save points to keep per project.

**Default value**: `50`

**Options**:
```json
{
    "globalSaveState.maxSavePoints": 25    // Fewer save points
}
```
```json
{
    "globalSaveState.maxSavePoints": 100   // More save points
}
```
```json
{
    "globalSaveState.maxSavePoints": 0     // Do not use — see below
}
```

**`0` is not “unlimited”.** A new save point is appended first and the list is then trimmed
while it is longer than the limit, so a limit of `0` drops every save point including the
one just created. There is no unlimited value — choose a number you are happy to keep.

## 🎯 Project-Specific Settings

### **Workspace Settings**
Create `.vscode/settings.json` in your project:

```json
{
    "globalSaveState.excludePatterns": [
        "**/node_modules/**",
        "**/.git/**",
        "**/my-specific-folder/**"
    ],
    "globalSaveState.maxSavePoints": 30
}
```

### **Language-Specific Configurations**

#### **Node.js/JavaScript Projects**
```json
{
    "globalSaveState.excludePatterns": [
        "**/node_modules/**",
        "**/.git/**",
        "**/dist/**",
        "**/build/**",
        "**/.vscode/**",
        "**/coverage/**",
        "**/.nyc_output/**",
        "**/npm-debug.log*"
    ]
}
```

#### **Python Projects**
```json
{
    "globalSaveState.excludePatterns": [
        "**/.git/**",
        "**/__pycache__/**",
        "**/venv/**",
        "**/env/**",
        "**/.env/**",
        "**/dist/**",
        "**/build/**",
        "**/*.egg-info/**",
        "**/.pytest_cache/**"
    ]
}
```

#### **Java Projects**
```json
{
    "globalSaveState.excludePatterns": [
        "**/.git/**",
        "**/target/**",
        "**/bin/**",
        "**/build/**",
        "**/.gradle/**",
        "**/.mvn/**",
        "**/out/**"
    ]
}
```

#### **React/Next.js Projects**
```json
{
    "globalSaveState.excludePatterns": [
        "**/node_modules/**",
        "**/.git/**",
        "**/.next/**",
        "**/build/**",
        "**/dist/**",
        "**/coverage/**",
        "**/.cache/**",
        "**/public/static/**"
    ]
}
```

## 🎮 Gaming-Style Configurations

### **Aggressive Saver** (Frequent small saves)
```json
{
    "globalSaveState.maxSavePoints": 100,
    "globalSaveState.excludePatterns": [
        "**/node_modules/**",
        "**/.git/**"
    ]
}
```

### **Strategic Saver** (Fewer, meaningful saves)
```json
{
    "globalSaveState.maxSavePoints": 20,
    "globalSaveState.excludePatterns": [
        "**/node_modules/**",
        "**/.git/**",
        "**/dist/**",
        "**/build/**",
        "**/temp/**",
        "**/*.log"
    ]
}
```

### **Minimalist** (Only source code)
```json
{
    "globalSaveState.excludePatterns": [
        "**/node_modules/**",
        "**/.git/**",
        "**/dist/**",
        "**/build/**",
        "**/package-lock.json",
        "**/yarn.lock",
        "**/*.log",
        "**/coverage/**",
        "**/docs/**",
        "**/README.md"
    ]
}
```

## 🔧 Advanced Pattern Matching

### **Glob Pattern Examples**
```json
{
    "globalSaveState.excludePatterns": [
        "**/*.log",           // All .log files
        "**/temp*/**",        // Any folder starting with "temp"
        "**/*-backup.*",      // Any backup files
        "**/.[!.]*",          // Hidden files (except .gitignore, etc.)
        "**/**/cache/**",     // Any cache folder at any level
        "*.tmp",              // .tmp files in root only
        "test/**/*.spec.js"   // Specific test files
    ]
}
```

### **File Size Considerations**
```json
{
    "globalSaveState.excludePatterns": [
        "**/*.zip",
        "**/*.tar.gz",
        "**/*.exe",
        "**/*.dmg",
        "**/*.iso",
        "**/*.pdf",
        "**/*.mp4",
        "**/*.mp3",
        "**/*.png",
        "**/*.jpg",
        "**/*.gif"
    ]
}
```

## 📊 Settings Validation

### **Check Your Configuration**
1. Create a save point
2. Check `.vscode/globalSaveState.json`
3. Verify excluded files aren't included
4. Adjust patterns if needed

### **Common Issues**
- **Too restrictive**: Save points are empty
- **Too permissive**: Save points are huge
- **Wrong patterns**: Files still being included/excluded incorrectly

## 🛠️ Settings Troubleshooting

### **Exclude Patterns Not Working**
1. **Check pattern syntax**: Use `**/` for recursive matching
2. **Test patterns**: Create test save point and verify
3. **Reload VS Code**: Sometimes needed for pattern changes

### **Save Points Too Large**
1. **Add more exclusions**: Target large folders
2. **Check for binary files**: Add common binary extensions
3. **Use workspace-specific settings**: Different projects need different exclusions

### **Settings Not Applied**
1. **Check settings scope**: User vs Workspace settings
2. **Reload window**: `Ctrl+Shift+P` → "Developer: Reload Window"
3. **Verify JSON syntax**: Ensure valid JSON in settings

## 🎯 Performance Tuning

### **For Large Projects**
```json
{
    "globalSaveState.maxSavePoints": 25,
    "globalSaveState.excludePatterns": [
        "**/node_modules/**",
        "**/.git/**",
        "**/dist/**",
        "**/build/**",
        "**/coverage/**",
        "**/*.map",
        "**/.cache/**",
        "**/logs/**"
    ]
}
```

### **For Small Projects**
```json
{
    "globalSaveState.maxSavePoints": 50,
    "globalSaveState.excludePatterns": [
        "**/node_modules/**",
        "**/.git/**"
    ]
}
```

## 🏆 Best Practices

### **Settings Management**
- ✅ **Use workspace settings** for project-specific needs
- ✅ **Keep user settings minimal** for global defaults
- ✅ **Document your patterns** with comments in settings
- ✅ **Test configurations** with real save points

### **Pattern Design**
- ✅ **Start restrictive** and loosen as needed
- ✅ **Exclude build artifacts** always
- ✅ **Consider file sizes** and exclude large binaries
- ✅ **Think about teammates** if sharing workspace settings

## 🎮 Gaming Philosophy

### **Settings as Game Difficulty**
- **Easy Mode**: Exclude everything except source code
- **Normal Mode**: Standard exclusions (recommended)
- **Hard Mode**: Minimal exclusions for complete state capture

### **Save Slot Management**
- **RPG Style**: Many saves (50-100) for experimentation
- **Action Game Style**: Few saves (10-20) for key checkpoints
- **Speedrun Style**: Minimal saves (5-10) for efficiency

## 🎯 Next Steps

🎉 **Settings configured!**

**Ready to optimize your workflow?**
- ⌨️ [Master Keyboard Shortcuts](Keyboard-Shortcuts)
- 🏆 [Learn Best Practices](Best-Practices)
- 📊 [Handle Large Projects](Large-Projects)

---

**🎮 Remember: The best settings are the ones that make you fearless to experiment!**