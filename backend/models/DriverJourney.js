const Sequelize = require("sequelize");
const db = require("../db");

let DriverJourney = db.define("DriverJourney", {
  id: {
    type: Sequelize.INTEGER(32),
    allowNull: true,
    primaryKey: true,
    autoIncrement: true,
  },
  driver_id: {
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
});
DriverJourney.associate = (models) => {
  DriverJourney.hasMany(models.Driver);
};
// Provider.associate = models => {
//     Provider.hasOne(models.Role);
//   };
driver_journies.associate = (models) => {
  driver_journies.belongsToMany(models.users, {
    foreignKey: "journeyId",
    through: "UserJourney",
    as: "users",
  });
};
// Provider.hasMany(Day, { foreignKey: 'provider_id' });
module.exports = DriverJourney;
