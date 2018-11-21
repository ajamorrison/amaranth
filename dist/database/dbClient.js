"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var DBClient = /** @class */ (function () {
    function DBClient(pathname) {
        this.directoryPath = pathname;
        fs.readdir(this.directoryPath, function (err, files) {
            files.forEach(function (file) {
                path.parse(path + file.toString());
                process.stdout.write("DB | Instance Created: " + file.toString() + "\n");
            });
        });
    }
    return DBClient;
}());
exports["default"] = DBClient;
//# sourceMappingURL=dbClient.js.map