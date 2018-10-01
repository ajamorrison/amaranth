"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
// Type definitions, helps with TS linting.
var mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        height: 600,
        width: 800
    });
    mainWindow.setMenu(null);
    // Get the webcontents of the window (ie all the html stuff) and open dev tools.
    mainWindow.webContents.openDevTools();
    // Load in the main html file.
    mainWindow.loadFile(path.join(__dirname, "../views/index.html"));
    mainWindow.on("closed", function () {
        mainWindow = null;
    });
}
// When the app process is ready, spawn the window
electron_1.app.on("ready", function () {
    createWindow();
});
// Quit when all windows are closed.
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
// Just to handle some weird dock behaviour for MacOS.
electron_1.app.on("activate", function () {
    if (mainWindow === null) {
        createWindow();
    }
});
//# sourceMappingURL=main.js.map