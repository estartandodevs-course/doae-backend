import "dotenv/config";
import app from "./src/index.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json" assert { type: "json" };

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(process.env.PORT, async () => {
	console.log("Servidor diz: chama os menó");
});
