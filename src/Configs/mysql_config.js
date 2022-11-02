import "dotenv/config";

const databaseConfig = {
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	dialect: process.env.DB_TYPE,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
};

export default databaseConfig;
