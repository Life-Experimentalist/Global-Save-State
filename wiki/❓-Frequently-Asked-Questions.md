# ❓ Frequently Asked Questions

Got questions? We've got answers! Here are the most common questions about Global Save State.

## 🎮 General Questions

### **Q: What exactly is Global Save State?**
**A:** It's like the save/load system in video games, but for your VS Code projects! Create checkpoints in your code that you can return to anytime, perfect for experimenting safely.

### **Q: How is this different from Git?**
**A:** Think of it this way:
- **Git** = Professional version control for teams and long-term projects
- **Global Save State** = Quick gaming-style checkpoints for experiments and learning

Git is like a detailed journal, Global Save State is like quicksave in a game!

### **Q: Can I use this alongside Git?**
**A:** Absolutely! They complement each other perfectly:
- Use **Git** for official commits and collaboration
- Use **Global Save State** for quick experiments between commits

### **Q: Is my data safe?**
**A:** Yes! Save points are stored locally in your project's `.vscode/globalSaveStates.json` file. Your data never leaves your machine.

## 🛠️ Installation & Setup

### **Q: What VS Code version do I need?**
**A:** VS Code 1.74.0 or newer. Most users already have this or newer.

### **Q: Does this work on Mac/Linux/Windows?**
**A:** Yes! Works on all platforms where VS Code runs.

### **Q: How much disk space does it use?**
**A:** Minimal! Only stores text files that change. A typical project might use 1-5MB total for all save points.

### **Q: Can I use this in the VS Code web editor?**
**A:** Currently no, it requires local file system access.

## ⚡ Usage Questions

### **Q: How many save points can I have?**
**A:** Default limit is 50 per project. You can change this in settings or disable the limit entirely.

### **Q: What files get saved?**
**A:** All your source code, config files, and documentation. Excludes `node_modules`, `.git`, `dist`, etc. by default.

### **Q: Can I save individual files instead of the whole project?**
**A:** Not currently, but it's on the roadmap! For now, it saves the entire project state.

### **Q: Do save points work across VS Code restarts?**
**A:** Yes! Save points persist until you delete them or hit your maximum limit.

### **Q: Can I rename save points after creating them?**
**A:** Not directly through the UI yet, but you can edit the `.vscode/globalSaveStates.json` file manually.

## 🎯 Workflow Questions

### **Q: When should I create save points?**
**A:** Think like a gamer:
- Before trying risky experiments
- After completing working features
- When following tutorials step-by-step
- Before major refactoring

### **Q: How often should I save?**
**A:** Whenever you have something working that you might want to return to. Could be every 30 minutes or every few hours - whatever feels right for your workflow.

### **Q: What's a good naming strategy?**
**A:** Use descriptive, gaming-style names:
- ✅ "Before Boss Fight" (before difficult features)
- ✅ "Level 1 Complete" (after finishing something)
- ✅ "Working Login System" (functional states)
- ❌ "Save 1", "Test", "Backup" (too generic)

## 🔧 Technical Questions

### **Q: Where are save points stored?**
**A:** In `.vscode/globalSaveStates.json` in your project root. This file contains all your save point data.

### **Q: Can I share save points with teammates?**
**A:** You could commit the `.vscode/globalSaveStates.json` file to version control, but it's designed for personal use rather than team sharing.

### **Q: What happens if I delete the .vscode folder?**
**A:** You'll lose all save points for that project. The extension will start fresh with no save history.

### **Q: Can I backup my save points?**
**A:** Yes! Just copy the `.vscode/globalSaveStates.json` file somewhere safe.

### **Q: Does this work with multi-root workspaces?**
**A:** Yes! Each workspace folder maintains its own independent save points.

## 🚨 Troubleshooting

### **Q: Save points aren't being created**
**A:** Check these common issues:
- Do you have write permissions to the project folder?
- Are all your files excluded by the exclude patterns?
- Is the project folder read-only?
- Try restarting VS Code

### **Q: "Empty save point" message**
**A:** This means no files were different from your last save point. Either:
- You haven't made changes since the last save
- All changes are in excluded folders (like `node_modules`)

### **Q: Restore isn't working**
**A:** Try these steps:
- Close any open files that might be locked
- Check file permissions
- Restart VS Code
- Check the Output panel for error messages

### **Q: Extension commands not appearing**
**A:**
- Check that the extension is enabled in the Extensions view
- Reload the window: `Ctrl+Shift+P` → "Developer: Reload Window"
- Reinstall the extension if necessary

### **Q: Keyboard shortcuts not working**
**A:** Check for conflicts:
- Go to File → Preferences → Keyboard Shortcuts
- Search for "globalSaveState"
- Reassign if there are conflicts

## 📊 Performance Questions

### **Q: Will this slow down VS Code?**
**A:** No! Save points are created/restored only when you trigger them. No background processing.

### **Q: How does it handle large projects?**
**A:** Efficiently! Only changed files are stored, and binary files are excluded by default. Projects with thousands of files work fine.

### **Q: What about memory usage?**
**A:** Minimal memory footprint. Save points are stored on disk, not kept in memory.

## 🎮 Gaming & Philosophy Questions

### **Q: Why the gaming theme?**
**A:** Because coding should be fun! Games taught us that experimentation is safe when you can reload your save. We brought that fearless mindset to coding.

### **Q: What games inspired this?**
**A:** Any game with save states! RPGs, platformers, strategy games - anywhere you can save before trying something risky.

### **Q: Is this just for beginners?**
**A:** Not at all! While great for learning, experienced developers love it for:
- Quick prototyping
- Conference demos
- Tutorial creation
- Exploring new technologies

## 🔮 Future Features

### **Q: What's coming next?**
**A:** Top requests include:
- Timeline integration in VS Code
- Individual file restoration
- Save point comparison view
- Export/import functionality

### **Q: Can I request features?**
**A:** Absolutely! Use our [GitHub Issues](https://github.com/Life-Experimentalist/Global-Save-State/issues) to suggest features.

### **Q: How can I contribute?**
**A:** We welcome code, documentation, and feedback! Check out our [GitHub repository](https://github.com/Life-Experimentalist/Global-Save-State) to get started.

## 💡 Pro Tips

### **Q: Any advanced tips?**
**A:**
- Create saves with meaningful names that explain what works
- Use saves to compare different approaches to the same problem
- Save before each tutorial step when learning new tech
- Keep a "safe room" save that you know always works
- Don't be afraid to experiment - you can always go back!

### **Q: Best practices for teams?**
**A:**
- Use for individual exploration, Git for team collaboration
- Share successful experiments by committing them to Git
- Create save points before trying teammate suggestions
- Use in code review prep to try different approaches

---

## 🆘 Still Need Help?

**Can't find your answer?**
- 💬 [Ask in Discussions](https://github.com/Life-Experimentalist/Global-Save-State/discussions)
- 🐛 [Report Issues](https://github.com/Life-Experimentalist/Global-Save-State/issues)
- 📧 Email: krishnagsvv@gmail.com

---

**🎮 Remember: The only dumb question is the one you don't ask! Game on!**