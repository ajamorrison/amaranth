"use strict";
exports.__esModule = true;
var fs = require("fs");
var logger_1 = require("../lambda/logger");
var dbFile_1 = require("./dbFile");
var DBClient = (function () {
    function DBClient(diskPath) {
        this.fileList = new Array();
        this.buildFiles(diskPath);
    }
    DBClient.prototype.buildFiles = function (path) {
        var _this = this;
        if (fs.lstatSync(path).isDirectory()) {
            logger_1["default"]("Iterating through directory " + path, "db");
            fs.readdir(path, function (err, items) {
                for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                    var item = items_1[_i];
                    _this.buildFiles(path + "/" + item);
                }
            });
        }
        else {
            this.fileList.push(new dbFile_1["default"](path));
        }
    };
    return DBClient;
}());
exports["default"] = DBClient;
//# sourceMappingURL=dbClient.js.map