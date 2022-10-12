import Sequelize, { Model } from "sequelize";
import databaseConfig from "../Configs/mysql_config.js";

const sequelize = new Sequelize(databaseConfig);

class DoacaoModel extends Model {};

DoacaoModel.init(
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
            allowNull: false
        },
        value: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        email_doador: {
            type: Sequelize.STRING,
            allowNull: false
        },
            id_meta: {
                type: Sequelize.STRING,
            allowNull: true,
        },
        id_product: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    },
    {
      sequelize,
      tableName: "doacoes",
      timestamps: true,
    }
);
  
export default DoacaoModel;