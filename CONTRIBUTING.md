# Contributing to Global Save State

🎮 Welcome to the Global Save State project! We're excited that you want to contribute to making VS Code feel more like your favorite video game!

## 🚀 Quick Start

1. **🍴 Fork** the repository
2. **📥 Clone** your fork: `git clone https://github.com/YOUR_USERNAME/global-save-state.git`
3. **📦 Install** dependencies: `npm install`
4. **🔧 Build** the extension: `npm run compile`
5. **🧪 Test** your changes: `npm test`
6. **📝 Submit** a pull request

## 🛠️ Development Setup

### Prerequisites
- **Node.js** 16+
- **VS Code** 1.74.0+
- **Git**

### Local Development
```bash
# Clone and setup
git clone https://github.com/Life-Experimentalist/global-save-state.git
cd global-save-state
npm install

# Build and watch for changes
npm run watch

# Run tests
npm test

# Package for testing
npm run package
```

### Testing Your Changes
1. **Open in VS Code**: Open the project folder in VS Code
2. **Debug Extension**: Press `F5` to launch Extension Development Host
3. **Test Features**: Try creating/restoring save points in the new window
4. **Check Console**: View output in the Debug Console for any errors

## 📋 Types of Contributions

### 🐛 Bug Fixes
- Use the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md)
- Include reproduction steps and environment details
- Test your fix thoroughly before submitting

### ✨ New Features
- Use the [feature request template](.github/ISSUE_TEMPLATE/feature_request.md)
- Discuss the feature in an issue before implementing
- Keep the game theme in mind - how would this work in a video game?

### 📚 Documentation
- Use the [documentation template](.github/ISSUE_TEMPLATE/documentation.md)
- Improve README, code comments, or help content
- Ensure examples are clear and accurate

### 🔧 Performance Improvements
- Use the [performance template](.github/ISSUE_TEMPLATE/performance.md)
- Provide benchmarks showing improvement
- Test with various project sizes

## 🎯 Code Guidelines

### Game-Themed Naming
Keep the gaming metaphor consistent:
- ✅ `savePoint`, `checkpoint`, `restore`, `loadGame`
- ❌ `backup`, `snapshot`, `version`, `commit`

### Code Style
```typescript
// Use descriptive, game-themed variable names
const savePointName = await getSavePointName();
const checkpointData = collectProjectFiles();

// Follow VS Code extension patterns
const command = vscode.commands.registerCommand(
  'globalSaveState.createSavePoint',
  async () => { /* implementation */ }
);
```

### File Structure
```
src/
├── extension.ts          // Main extension entry point
├── savePointManager.ts   // Core save/restore logic
├── fileCollector.ts      // File collection utilities
├── timeline.ts           // Timeline API integration
└── test/                 // Test files
    ├── suite/
    └── *.test.ts
```

## 🧪 Testing Guidelines

### Unit Tests
```typescript
// Test naming should be descriptive
describe('SavePointManager', () => {
  it('should create save point with valid name', async () => {
    // Test implementation
  });

  it('should handle empty projects gracefully', async () => {
    // Test implementation
  });
});
```

### Manual Testing Checklist
- [ ] Create save points in single-folder workspace
- [ ] Create save points in multi-root workspace
- [ ] Restore save points successfully
- [ ] Handle projects with exclude patterns
- [ ] Test with large projects (1000+ files)
- [ ] Verify Timeline integration works
- [ ] Check keyboard shortcuts function
- [ ] Test error handling scenarios

## 📦 Pull Request Process

### Before Submitting
1. **🧪 Test thoroughly** - Run all tests and manual testing
2. **📝 Update documentation** - Update README if needed
3. **🎯 Follow conventions** - Use game-themed naming and code style
4. **📋 Fill out template** - Use the PR template completely

### PR Title Format
```
[TYPE] Brief description

Examples:
[FEATURE] Add Timeline API integration for save point visualization
[BUG] Fix save point creation in multi-root workspaces
[DOCS] Update installation instructions with marketplace link
[PERF] Optimize file collection for large projects
```

### PR Description Template
```markdown
## 🎯 What This PR Does
Brief description of changes

## 🎮 Game Analogy
How would you explain this feature in game terms?

## 🧪 Testing Done
- [ ] Unit tests pass
- [ ] Manual testing completed
- [ ] Tested with different project types
- [ ] Performance impact assessed

## 📋 Checklist
- [ ] Code follows project conventions
- [ ] Documentation updated
- [ ] Tests added/updated
- [ ] No breaking changes (or clearly documented)
```

## 🏷️ Commit Message Format

Use conventional commits with gaming flair:
```bash
# Format: type(scope): description
feat(timeline): add save point visualization in timeline view
fix(restore): handle file permission errors gracefully
docs(readme): update installation instructions
perf(files): optimize large project handling
test(manager): add unit tests for save point creation

# Use game terminology in descriptions
git commit -m "feat(savepoint): add checkpoint naming with emoji support 🎮"
git commit -m "fix(restore): prevent save corruption during boss fights"
```

## 🎮 Gaming Theme Guidelines

### Language & Terminology
| ✅ Use        | ❌ Avoid   |
| ------------ | --------- |
| Save Point   | Backup    |
| Checkpoint   | Snapshot  |
| Restore/Load | Revert    |
| Game Save    | Version   |
| Save Slot    | Archive   |
| Quick Save   | Auto Save |

### UI/UX Considerations
- **Familiar Gaming UX**: Make interactions feel like game save systems
- **Clear Feedback**: Show progress like loading screens in games
- **Error Handling**: Use gaming language ("Save corrupted", "Cannot save here")
- **Naming**: Allow creative save point names like games do

## 🎖️ Recognition

Contributors will be:
- **📋 Listed** in CONTRIBUTORS.md
- **🏆 Credited** in release notes
- **⭐ Highlighted** on the project website
- **🎮 Given** a special gaming-themed title based on contribution type:
  - 🐛 **Bug Hunter** - Bug fixes
  - ✨ **Feature Creator** - New features
  - 📚 **Lore Master** - Documentation
  - ⚡ **Performance Optimizer** - Performance improvements

## ❓ Questions?

- **💬 Discussions**: [GitHub Discussions](https://github.com/Life-Experimentalist/global-save-state/discussions)
- **📧 Email**: krishnagsvv@gmail.com
- **🐛 Issues**: Use our detailed issue templates
- **💡 Ideas**: Start with a feature request issue

## 🎯 Current Priorities

Check our [roadmap](docs/ROADMAP.md) for current priorities:

1. **Timeline API Integration** - Show save points in VS Code timeline
2. **Performance Optimization** - Handle large projects better
3. **Enhanced UI** - Better save point management interface
4. **Cross-Platform Testing** - Ensure compatibility across OS

---

**Remember**: This extension is all about making coding feel like gaming! Keep that spirit alive in everything you contribute. Every feature should answer: "How would this work in my favorite video game?" 🎮

Happy Contributing! 🚀