const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const path = require('path');
const fs   = require('fs');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    minWidth: 800,
    minHeight: 600,
    title: 'RPG Synergy Party Builder',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    backgroundColor: '#121212',
  });

  win.loadFile(path.join(__dirname, 'src', 'index.html'));

  // IPC: open a native folder picker
  ipcMain.handle('pick-folder', async () => {
    const result = await dialog.showOpenDialog(win, {
      title: 'Select Save Folder',
      properties: ['openDirectory'],
    });
    if (result.canceled || result.filePaths.length === 0) return null;
    return result.filePaths[0];
  });

  // IPC: write a file directly to a folder path
  ipcMain.handle('write-file', async (_event, folderPath, filename, text) => {
    try {
      const fullPath = path.join(folderPath, filename);
      fs.writeFileSync(fullPath, text, 'utf8');
      return { ok: true, fullPath };
    } catch (err) {
      return { ok: false, error: err.message };
    }
  });

  // Menu
  const template = [
    {
      label: 'File',
      submenu: [
        { label: 'Reload', accelerator: 'CmdOrCtrl+R', click: () => win.reload() },
        { type: 'separator' },
        { label: 'Quit', accelerator: 'CmdOrCtrl+Q', click: () => app.quit() },
      ],
    },
    {
      label: 'View',
      submenu: [
        { label: 'Zoom In',  accelerator: 'CmdOrCtrl+=', click: () => { const z = win.webContents.getZoomFactor(); win.webContents.setZoomFactor(Math.min(z + 0.1, 3.0)); } },
        { label: 'Zoom Out', accelerator: 'CmdOrCtrl+-', click: () => { const z = win.webContents.getZoomFactor(); win.webContents.setZoomFactor(Math.max(z - 0.1, 0.3)); } },
        { label: 'Reset Zoom', accelerator: 'CmdOrCtrl+0', click: () => win.webContents.setZoomFactor(1.0) },
        { type: 'separator' },
        { label: 'Toggle Fullscreen', accelerator: 'F11', click: () => win.setFullScreen(!win.isFullScreen()) },
      ],
    },
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});

app.on('window-all-closed', () => { app.quit(); });
