import express from "express";
import "dotenv/config";
import connectDatabase from "./src/Config/mongodb.js";
import initDatabase from "./src/Config/mysql_init.js";
import routesMeta from "./src/Routes/routeMeta.js";

const app = express();

app.use(express.json());

app.use(routesMeta);

app.listen(3001, async () => {
	await connectDatabase();
	await initDatabase();
	console.log("Servidor diz: bora bill");
});
