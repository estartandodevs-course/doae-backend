import { Sequelize } from "sequelize";
import databaseConfig from "./mysql_config.js";

function database() {
	connection = new Sequelize(databaseConfig);
	return connection;
}

export default database;
