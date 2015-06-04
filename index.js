var app = require('app');
var BrowserWindow = require('browser-window');

app.on('window-all-closed', function() {
    console.log(process.platform);
    if(process.platform != 'darwin')
        app.quit();
});

app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        width: 1080,
        height: 720,
        center: true,
        title: 'Cronos'
    });

    mainWindow.loadUrl('file://' + __dirname + '/index.html');

    mainWindow.webContents.on('did-finish-load', function() {
        mainWindow.setMinimumSize(881, 400);
        mainWindow.openDevTools();
        mainWindow.show();
        mainWindow.focus();
    });
});
