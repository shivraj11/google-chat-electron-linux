const {app} = require('electron');

module.exports.enforceSingleInstance = () => {
  const gotTheLock = app.requestSingleInstanceLock();

  if (!gotTheLock) {
    console.info('Force exit from second instance');
    app.exit();
  }

  return gotTheLock;
}

module.exports.restoreFirstInstance = (window) => {
  app.on('second-instance', () => {
    // Someone tried to run a second instance, we should focus our window.
    if (window) {
      if (window.isMinimized()) {
        window.restore()
      }
      window.show()
    }
  })
}
