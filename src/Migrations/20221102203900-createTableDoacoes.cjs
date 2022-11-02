"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		queryInterface.createTable("donations", {
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
        allowNull: true
      },
      value: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      email_giver: {
        type: Sequelize.STRING,
        allowNull: false
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
      createdAt: {
				type: Sequelize.DATE
			},
			updatedAt: {
				type: Sequelize.DATE
			}
		});
	},

	down: async (queryInterface, Sequelize) => {
		queryInterface.dropTable("donations");
	},
};
