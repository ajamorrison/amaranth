"use strict";
exports.__esModule = true;
var fs = require("fs");
var DBClient = /** @class */ (function () {
    function DBClient(path) {
        process.stdout.write("Creating DB Client.\n");
        this.directoryPath = path;
        fs.readdir(this.directoryPath, function (err, files) {
            files.forEach(function (file) {
                process.stdout.write(file.toString());
            });
        });
    }
    return DBClient;
}());
exports["default"] = DBClient;
//# sourceMappingURL=dbClient.js.map