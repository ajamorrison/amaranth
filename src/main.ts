import { app, BrowserWindow} from "electron";
import * as path from "path";

// Type definitions, helps with TS linting.
let mainWindow: Electron.BrowserWindow;

function createWindow() {
    mainWindow = new BrowserWindow(
        {
            height: 600,
            width: 800,
        },
    );

    mainWindow.setMenu(null);

    // Get the webcontents of the window (ie all the html stuff) and open dev tools.
    mainWindow.webContents.openDevTools();

    // Load in the main html file.
    mainWindow.loadFile(path.join(__dirname, "../views/index.html"));

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
}

// When the app process is ready, spawn the window
app.on("ready", () => {
    createWindow();
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

// Just to handle some weird dock behaviour for MacOS.
app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});

