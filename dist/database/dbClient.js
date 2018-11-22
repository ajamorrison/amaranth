"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var logger_1 = require("../lambda/logger");
var DBClient = (function () {
    function DBClient(pathname) {
        var _this = this;
        this.directoryPath = process.cwd() + pathname;
        this.data = new Map();
        logger_1["default"]("Creating DB from folder " + this.directoryPath, "DB");
        fs.readdir(this.directoryPath, function (err, files) {
            files.forEach(function (file) {
                path.parse(path + file.toString());
                if (file.endsWith(".json")) {
                    fs.readFile(_this.directoryPath + "\\" + file, "utf8", function (error, JSONdata) {
                        _this.data.set(file, JSON.parse(JSONdata));
                        logger_1["default"]("JSON Instance Created of " + file, "DB");
                    });
                }
                else {
                    logger_1["default"]("Generic instance created of " + file, "DB");
                }
            });
        });
    }
    DBClient.prototype.get = function (id, key) {
        var obj = this.data.get(id);
        return obj[key];
    };
    return DBClient;
}());
exports["default"] = DBClient;
//# sourceMappingURL=dbClient.js.map