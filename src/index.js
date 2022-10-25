import express from "express";
import routes from "./Routes/index.js";
import connectDatabase from "./Configs/mongodb.js";
import initDatabase from "./Configs/mysql_init.js";
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
		this.server.use(routes.routesProduto);
		this.server.use(routes.routesDoacao);
	}
}

export default new App().server;