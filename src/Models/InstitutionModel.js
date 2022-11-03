import Sequelize, { Model } from "sequelize";
import databaseConfig from "../Configs/mysql_config.js";

const sequelize = new Sequelize(databaseConfig);

class InstitutionModel extends Model {}

InstitutionModel.init(
	{
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
        },
        verified: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        email : {
            type: Sequelize.STRING,
            allowNull: false
        },
        password : {
            type: Sequelize.STRING,
            allowNull: true
        },
        pix: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        agency: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        count: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        cep: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        id_external: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        logo: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        cnpj: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        site: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
        suspend: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        }
	},
	{
		sequelize,
		tableName: "institutions",
		timestamps: true,
	}
);

export default InstitutionModel;
