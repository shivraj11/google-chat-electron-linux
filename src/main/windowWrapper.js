const path = require('path');
const {app, BrowserWindow} = require('electron');

module.exports = () => {
  const window = new BrowserWindow({
    webPreferences: {
      autoplayPolicy: 'user-gesture-required',
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
      preload: path.join(app.getAppPath(), 'src/renderer/index.js'),
    },
    icon: path.join(app.getAppPath(), 'resources/icons/normal/256.png'),
    minHeight: 570,
    minWidth: 400,
    center: true,
    title: app.getName(),
    backgroundColor: '#f8f8f8',
    fullscreenable: false,
  });

  const splashFile = path.join(app.getAppPath(), 'src/renderer/splash/index.html')
  window.loadURL(`file://${splashFile}`);

  return window;
};
