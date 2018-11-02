"use strict";
exports.__esModule = true;
/**
 * Single object that exists over the lifespan of an
 * http request, used to build a response, then
 * dies.
 */
var RequestHandler = /** @class */ (function () {
    function RequestHandler(req) {
        process.stdout.write(req.baseUrl);
    }
    return RequestHandler;
}());
exports["default"] = RequestHandler;
//# sourceMappingURL=requestHandler.js.map