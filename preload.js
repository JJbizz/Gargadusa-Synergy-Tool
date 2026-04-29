const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronFS', {
  pickFolder: () => ipcRenderer.invoke('pick-folder'),
  writeFile:  (folderPath, filename, text) => ipcRenderer.invoke('write-file', folderPath, filename, text),
});
