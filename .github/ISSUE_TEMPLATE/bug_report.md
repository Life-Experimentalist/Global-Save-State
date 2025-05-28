---
name: 🐛 Bug Report
about: Create a detailed bug report to help us improve the extension
title: '[BUG] '
labels: ['bug', 'needs-triage']
assignees: ['Life-Experimentalist']

---

## 🐛 Bug Description
**A clear and concise description of what the bug is.**

## 🔄 Steps to Reproduce
**Please provide detailed steps to reproduce the behavior:**

1. Open VS Code with workspace/folder: `[folder structure]`
2. Execute command: `[command name or shortcut]`
3. Enter save point name: `[if applicable]`
4. See error: `[describe what happens]`

## ✅ Expected Behavior
**A clear and concise description of what you expected to happen.**

## ❌ Actual Behavior
**A clear and concise description of what actually happened.**

## 🖼️ Screenshots/Videos
**If applicable, add screenshots or screen recordings to help explain your problem.**

## 📋 Environment Information
**Please complete the following information:**

### VS Code
- **VS Code Version**: [e.g., 1.85.2]
- **Extension Version**: [e.g., 1.0.3]
- **OS**: [e.g., Windows 11, macOS 14.2, Ubuntu 24.04]
- **Architecture**: [e.g., x64, arm64]

### Workspace Details
- **Project Type**: [e.g., Node.js, Python, React, etc.]
- **Workspace Type**: [Single folder / Multi-root workspace]
- **Folder Size**: [Approximate number of files]
- **Special Characters in Path**: [Yes/No - if yes, specify]

### Extension Settings
```json
// Your Global Save State extension settings from settings.json
{
  "globalSaveState.excludePatterns": [],
  "globalSaveState.maxSavePoints": 50
}
```

## 📝 Error Output
**Please provide any error messages or output:**

### VS Code Developer Console
```
[Paste any console errors here - Open with Ctrl+Shift+I > Console tab]
```

### Extension Output
```
[Paste extension output here - View > Output > Select "Global Save State"]
```

### File System Errors
```
[Any file permission or disk space errors]
```

## 🔍 Additional Context
**Add any other context about the problem here:**

- Does this happen with all projects or specific ones?
- Did this work in a previous version?
- Are you using any specific VS Code settings or other extensions that might interfere?
- Network drive or cloud synced folders (OneDrive, Dropbox, etc.)?

## 🧪 Debugging Information
**Please help us debug by providing:**

### Save Point File Location
- **Path**: `[where .vscode/globalSaveStates.json is located]`
- **File Size**: `[size of the save states file]`
- **Permissions**: `[can you read/write to this location?]`

### Recent Actions
- **Last Successful Save Point**: `[when/name]`
- **Recent Extension Updates**: `[any recent VS Code or extension updates]`
- **System Changes**: `[any recent system updates or changes]`

---

### 📋 Checklist
**Before submitting, please check:**

- [ ] I have searched existing issues for duplicates
- [ ] I have provided all requested environment information
- [ ] I have included steps to reproduce the issue
- [ ] I have tested with the latest version of the extension
- [ ] I have checked that this isn't a VS Code core issue
- [ ] I have included relevant error messages and logs
