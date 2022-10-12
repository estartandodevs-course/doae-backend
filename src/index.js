import express from "express";
import routes from "./Routes/index.js";
import connectDatabase from "./Config/mongodb.js";
import initDatabase from "./Config/mysql_init.js";
class App {
    server;

    constructor() {
        this.server = express();
        this.initDdb();
        this.middleares();
        this.routes();
    }

    async initDdb() {
        await connectDatabase();
        await initDatabase();
    }

    middleares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes.routesMeta);
        this.server.use(routes.routesProduct);
    }
}

export default new App().server;