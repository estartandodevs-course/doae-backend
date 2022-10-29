"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		queryInterface.createTable("instituicoes", {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			verificado: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
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
		});
	},

	down: async (queryInterface, Sequelize) => {
		queryInterface.dropTable("instituicoes");
	},
};
