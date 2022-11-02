import Sequelize, { Model } from "sequelize";
import databaseConfig from "../Configs/mysql_config.js";

const sequelize = new Sequelize(databaseConfig);

class InstituicaoModel extends Model {}

InstituicaoModel.init(
	{
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
        },
        verificado: {
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
        agencia: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        conta: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        telefone: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        cep: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        identificador: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        logomarca: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        descricao: {
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
		tableName: "instituicoes",
		timestamps: true,
	}
);

export default InstituicaoModel;
