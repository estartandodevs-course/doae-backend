"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		queryInterface.createTable("doacoes", {
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
      },
      suspend: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }
		});
	},

	down: async (queryInterface, Sequelize) => {
		queryInterface.dropTable("doacoes");
	},
};
