import express from "express";
import "dotenv/config";
import connectDatabase from "./src/Config/mongodb.js";
import initDatabase from "./src/Config/mysql_init.js";
import routesMeta from "./src/Routes/routeMeta.js";
import routesProduct from "./src/Routes/routeProduct.js";

const app = express();

app.use(express.json());

app.use(routesMeta);
app.use(routesProduct);

app.listen(3001, async () => {
	await connectDatabase();
	await initDatabase();
	console.log("Servidor diz: bora bill");
});
