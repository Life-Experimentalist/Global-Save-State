# Change Log

All notable changes to the "Global Save State" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [1.0.2] - 2025-05-27

### Changed
- Optimized extension with webpack bundling (99.6% size reduction from 28MB to ~108KB)
- Enhanced build script with colored output and automated cleanup
- Improved package structure for marketplace publishing

## [1.0.1] - 2025-05-27

### Changed
- Updated publisher configuration for VS Code Marketplace
- Enhanced documentation with professional game-themed README
- Added proper repository links and marketplace metadata

## [1.0.0] - 2025-05-27

### Added
- Initial release: create and restore global save points
- Exclusion pattern support for ignoring specific files/folders
- Multi-root workspace support
- User-named save points with custom descriptions
- Empty save point handling and validation
- Timeline integration for visual save point management
- Keyboard shortcuts (Ctrl+Shift+S for create, Ctrl+Alt+R for restore)

---

```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title Release Timeline
    section v1.0.2
    Optimization Release :done, 2025-05-27,2025-05-27
    section v1.0.1
    Marketplace Prep :done, 2025-05-27,2025-05-27
    section v1.0.0
    Initial Release :done, 2025-05-27,2025-05-27
```
