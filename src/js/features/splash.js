const path = require('path');
const {app, BrowserWindow} = require('electron');

module.exports = () => {
  const splash = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
    },
    icon: path.join(app.getAppPath(), 'resources/icons/normal/256.png'),
    frame: false,
    movable: false,
    center: true,
    transparent: true,
    height: 360,
    width: 480,
    backgroundColor: '#f8f8f8',
  });

  const splashFile = path.join(app.getAppPath(), 'src/splash.html')
  splash.loadURL(`file://${splashFile}`);

  return splash;
}
