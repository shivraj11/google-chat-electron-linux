'use strict';

const path = require('path');
const {app, BrowserWindow} = require('electron');
const loadSplashWindow = require('./features/splash.js');

module.exports = (url) => {
  const window = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      preload: path.join(app.getAppPath(), 'src/js/renderer.js'),
    },
    icon: path.join(app.getAppPath(), 'resources/icons/normal/256.png'),
    show: false,
    minHeight: 570,
    minWidth: 400,
    center: true,
    title: app.getName(),
    backgroundColor: '#ffffff',
  });

  const splash = loadSplashWindow();
  window.loadURL(url);

  window.once('ready-to-show', () => {
    splash.destroy();
    window.show();
  });

  return window;
};
