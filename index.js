import "dotenv/config";
import app from "./src/index.js";
import swaggerUi from "swagger-ui-express";
import fs from "fs";

const swaggerDocs = fs.readFileSync("./swagger.json");

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(JSON.parse(swaggerDocs)));

app.listen(process.env.PORT, async () => {
	console.log("Servidor diz: chama os menó");
});
