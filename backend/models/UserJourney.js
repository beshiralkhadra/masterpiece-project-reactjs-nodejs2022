const Sequelize = require("sequelize");
const db = require("../db");

let UserJourney = db.define("UserJourney", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  journeyId: {
    type: Sequelize.INTEGER,
  },
  userId: {
    type: Sequelize.INTEGER,
  },
  user_name: {
    type: Sequelize.STRING,
  },
});
UserJourney.associate = (models) => {
  UserJourney.belongsTo(models.users, {
    foreignKey: "userId",
    as: "user",
  });
  UserJourney.belongsTo(models.driver_journies, {
    foreignKey: "journeyId",
    as: "driver_journey",
  });
};

module.exports = Provider_Service;
