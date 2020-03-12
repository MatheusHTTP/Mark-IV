'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('geo', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        idViagem: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'viagem', key:'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        timestamp: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },
        latitude: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        longitude: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        velocidade: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
      });

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('geo');

  }
};
