import "dotenv/config";
import app from "./src/index.js";

app.listen(process.env.PORT, async () => {
	console.log("Servidor diz: chama os menó");
});