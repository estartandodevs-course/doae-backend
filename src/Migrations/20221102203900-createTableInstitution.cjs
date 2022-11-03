"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		queryInterface.createTable("institutions", {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
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
				unique: true
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
		});
	},

	down: async (queryInterface, Sequelize) => {
		queryInterface.dropTable("institutions");
	},
};
