import express from "express";
import routes from "./Routes/index.js";
import connectDatabase from "./Configs/mongodb.js";
import initDatabase from "./Configs/mysql_init.js";
import cors from "cors";
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
		this.server.use((req, res, next) => {
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Methods", "*");
			res.header("Access-Control-Allow-Headers", true);
			this.server.use(cors());
			next();
		});
	}

	routes() {
		this.server.use(routes.routesMeta);
		this.server.use(routes.routesProduto);
		this.server.use(routes.routesDoacao);
		this.server.use(routes.routesInstituicao);
	}
}

export default new App().server;
