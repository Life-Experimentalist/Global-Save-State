# Architecture

## Overview
This extension provides a global save state system for VS Code workspaces, allowing users to create and restore project-wide save points using a simple UI. It is not a version control system, but a rollback mechanism for all files, respecting user-defined exclusions.

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
- **Empty Save Points**: If no changes, a new save point is still created for timeline marking.
- **User Naming**: Each save point is named by the user for easy identification.

## Future Considerations
- Integrate with a custom tree view for visual save/restore.
- Add UI for managing and deleting save points.
- Support for workspace trust and security.
- Optionally allow storing save points in the workspace (not just global state).
