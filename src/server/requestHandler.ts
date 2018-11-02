import { Request } from "express";



/**
 * Single object that exists over the lifespan of an
 * http request, used to build a response, then
 * dies.
 */
export default class RequestHandler {

    constructor(req: Request) {
        process.stdout.write(req.baseUrl);

    }
}
