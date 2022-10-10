import database from "./mysql_connection.js";

async function initDatabase() {
	try {
		await database.authenticate;
		console.log("Mysql diz: o pai ta on");
	} catch (error) {
		console.log("Não foi possível conectar ao banco de dados: ", error.message);
	}
}

export default initDatabase;
