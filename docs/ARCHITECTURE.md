# Architecture

## Overview
This extension provides a save point system for VS Code workspaces, allowing users to create and restore project-wide save points using a simple UI. It is not a version control system. A restore is an overlay: every file the save point captured is overwritten in place, files created since the save point are left alone, and nothing is ever deleted. User-defined exclusions are respected.

## Components
- **Extension Activation**: Registers commands for creating and restoring save points.
- **Save Point Manager**: Handles creation, storage, and restoration of save points.
- **Exclusion Handler**: Reads exclusion patterns from settings.
- **Custom Save State View**: Tree view for visual save point navigation (planned).

## Data Flow
```mermaid
graph TD
    A[User] -- Create Save Point --> B[Prompt for Name]
    B --> C[Collect Files (exclude patterns)]
    C --> D[Compare with Last Save Point]
    D -- Changes --> E[Store Save Point]
    D -- No Changes --> F[Store Empty Save Point]
    E & F --> G[Show in Save State View]
    G -- User Selects Save Point --> H[Restore Files]
```

## Design Decisions
- **Not a VCS**: Only the latest state of each file is stored per save point; no diffs or history.
- **Exclusion Support**: Exclusion patterns are respected per workspace folder.
- **Multi-root Support**: Each open folder is handled separately for exclusions and save/restore.
- **Empty Save Points**: If nothing changed since the previous save point, the new one is still recorded but stores no files; restoring it warns that it is empty and writes nothing.
- **User Naming**: Each save point is named by the user for easy identification.

## Future Considerations
- Integrate with a custom tree view for visual save/restore.
- Add UI for managing and deleting save points.
- Support for workspace trust and security.
- Optionally allow storing save points in the workspace (not just global state).
