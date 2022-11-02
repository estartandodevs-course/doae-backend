import Sequelize, { Model } from "sequelize";
import databaseConfig from "../Configs/mysql_config.js";

const sequelize = new Sequelize(databaseConfig);

class DonationModel extends Model {}

DonationModel.init(
	{
		id: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
			allowNull: false,
			primaryKey: true,
		},
		id_institution: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		status: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
		},
		value: {
			type: Sequelize.FLOAT,
			allowNull: false,
		},
		email_giver: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		id_target: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		id_product: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		suspend: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "donations",
		timestamps: true,
	}
);

export default DonationModel;
