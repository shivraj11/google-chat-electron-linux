# Google Chat Linux Desktop App

[![gh-actions](https://github.com/ankurk91/google-chat-electron-linux/workflows/release/badge.svg)](https://github.com/ankurk91/google-chat-electron-linux/actions)
[![license](https://badgen.net/github/license/ankurk91/google-chat-electron-linux)](https://github.com/ankurk91/google-chat-electron-linux)
[![latest-release](https://badgen.net/github/release/ankurk91/google-chat-electron-linux)](https://github.com/ankurk91/google-chat-electron-linux/tags)
[![downloads](https://img.shields.io/github/downloads/ankurk91/google-chat-electron-linux/total?style=flat)](https://github.com/ankurk91/google-chat-electron-linux/releases)
[![dependencies](https://img.shields.io/david/ankurk91/google-chat-electron-linux)](https://david-dm.org/ankurk91/google-chat-electron-linux)

An unofficial desktop client for [Google Chat](https://chat.google.com/) build with [Electron](https://www.electronjs.org/).

### Installation
* Download the latest `.deb` file from the [releases](https://github.com/ankurk91/google-chat-electron-linux/releases/latest) section.
* Install the package with this command: (correct the path)
```
sudo apt install ~/path/to/google-chat-electron-xxx-amd64.deb
```
* Relaunch the app if running already.

### Uninstall
* Quit from app if running
* You can remove the app with this command
```
sudo apt-get remove --purge google-chat-electron
```
* The uninstallation script should remove all relevant files and folders.

### Troubleshoot
#### White screen on launch?
Press `CTRL+R` to reload the app, check your internet connection.

### Todos
* [x] Create automated release via Github actions
* [x] Save and restore window size 
* [x] Unread message count badge
* [x] Run at OS startup
* [x] App updates notification

### Supported Platforms
This application is being tested on:
* Ubuntu 18.04, 20.04 GNOME
* Linux Mint 20.04 Cinnamon

### Acknowledgements
* [@robyf](https://github.com/robyf) for the initial work
* All other [contributors](https://github.com/ankurk91/google-chat-electron-linux/graphs/contributors)

## Disclaimer
This desktop client is just a wrapper which starts a chromium instance locally and runs the actual web-app in it. 
All rights to the [Google Chat](https://chat.google.com/) is reserved by [Google Inc.](https://en.wikipedia.org/wiki/Google) 
This desktop client has no way to access any of your data.

## License
[MIT](LICENSE.txt) License
