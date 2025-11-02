# 🎮 Troubleshooting

Having issues? Here are quick fixes for common problems:

## 🚨 Save Points Not Creating

**Problem**: Nothing happens when pressing `Ctrl+Shift+S`

**Solutions**:
- Check Extensions view - ensure Save Sync is enabled
- Try Command Palette: `Ctrl+Shift+P` → "Save Sync: Create Save Point"
- Verify you have write permissions to project folder
- Restart VS Code

## 🚨 Restore Not Working

**Problem**: Can't restore save points

**Solutions**:
- Ensure save points exist (check `.vscode/globalSaveStates.json`)
- Close all open files before restoring
- Check file permissions
- Try with a simple test project

## 🚨 Shortcuts Not Working

**Problem**: Keyboard shortcuts don't respond

**Solutions**:
- Check for conflicts: File → Preferences → Keyboard Shortcuts
- Search for "globalSaveState" and reassign if needed
- Use Command Palette as alternative
- On Mac, use `Cmd` instead of `Ctrl`

## 🚨 "Empty Save Point" Message

**Problem**: Save point created but seems empty

**Solutions**:
- Check exclude patterns in settings
- Ensure project has source code files
- Verify files are saved to disk

## 🆘 Still Need Help?

- **🐛 Report bugs**: [GitHub Issues](https://github.com/Life-Experimentalist/save-sync/issues)
- **💬 Ask questions**: [GitHub Discussions](https://github.com/Life-Experimentalist/save-sync/discussions)