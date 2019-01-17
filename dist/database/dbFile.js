"use strict";
exports.__esModule = true;
var logger_1 = require("../lambda/logger");
var DBFile = (function () {
    function DBFile(fileLocation) {
        logger_1["default"]("Creating new DB file instance " + fileLocation, "db");
    }
    return DBFile;
}());
exports["default"] = DBFile;
//# sourceMappingURL=dbFile.js.map