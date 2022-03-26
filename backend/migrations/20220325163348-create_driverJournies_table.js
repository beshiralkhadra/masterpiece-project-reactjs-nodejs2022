"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */
    await queryInterface.createTable("driver_journies", {
      id: {
        type: Sequelize.INTEGER(32),
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      driver_id: {
        //FK
        type: Sequelize.INTEGER(32),
        allowNull: false,
      },
      from: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      to: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      day: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      clock: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
    await queryInterface.dropTable("driver_journies");
  },
};
