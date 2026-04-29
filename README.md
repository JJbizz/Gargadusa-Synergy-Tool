# RPG Synergy Party Builder — Desktop App

Turns the single-file HTML app into a native Windows `.exe` installer
(also builds macOS `.dmg` and Linux `.AppImage` if needed).

---

## Requirements

- **Node.js 18+** → https://nodejs.org  
  (Includes `npm` automatically)

---

## Build Steps

### 1 · Install dependencies
Open a terminal in this folder and run:

```
npm install
```

This downloads Electron and electron-builder (~200 MB, one-time).

---

### 2 · Build the Windows installer

```
npm run build:win
```

When finished, look in the `dist/` folder for:

```
dist/
  RPG Synergy Party Builder Setup 3.1.8.exe   ← installer
  win-unpacked/                                 ← portable folder (no install needed)
```

Double-click the `.exe` to install. It creates a Start Menu shortcut and
optionally a Desktop shortcut.

---

### Other platforms (optional)

| Command            | Output            |
|--------------------|-------------------|
| `npm run build:mac`   | `dist/*.dmg`   |
| `npm run build:linux` | `dist/*.AppImage` |

---

## App Features (desktop-specific additions)

- **Menu bar**: File › Quit (`Ctrl+Q`), reload, View › Zoom in/out/reset, Fullscreen (`F11`)
- **Resizable window** with a minimum size so the layout never breaks
- **All saves persist** — the app uses `localStorage` in the Electron browser context,
  so party saves survive between sessions just like in a browser
- **No internet required** — fully offline

---

## Folder Structure

```
synergy-finder-app/
├── main.js          ← Electron entry point (window + menu)
├── package.json     ← Build config
├── src/
│   └── index.html   ← Your original HTML app (unchanged)
└── assets/
    ├── icon.png     ← 256×256 app icon
    └── icon.ico     ← Windows icon (multi-size)
```
