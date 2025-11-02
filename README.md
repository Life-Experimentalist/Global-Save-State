# save-sync

save-sync — VS Code extension to create and manage working save points (project snapshots).

Note: This project was formerly named "Global Save State" (repo: Global-Save-State). The old name and repository path will continue to redirect, but this README and package metadata have been updated to reflect the new name "save-sync" (display name: Save Sync).

Quick summary
- Create lightweight project snapshots (save points) inside VS Code so you can return to previous working states quickly.
- Local, fast, and workspace-focused snapshots — useful for experiments, refactors, and risky changes.

Install
- Install from the VS Code Marketplace (when published) or install the .vsix file.

Quick start
1. Open the Command Palette (Ctrl/Cmd+Shift+P).
2. Run "Save Sync: Create save point" to save the current workspace state.
3. Run "Save Sync: Restore save point" to revert to a previously saved snapshot.

Notes for maintainers
- package.json's "name" and "displayName" fields should be updated to "save-sync" and "Save Sync" respectively.
- Ensure repository, bugs, and homepage URLs in package.json point to https://github.com/Life-Experimentalist/save-sync.

Contributing
- Please open issues or pull requests. Use the "enhancement" label for feature proposals.

License
- (Keep existing license; add SPDX identifier here.)
