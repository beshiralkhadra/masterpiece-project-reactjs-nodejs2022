const Sequelize = require("sequelize");
const db = require("../db");

let User = db.define("User", {
  id: {
    type: Sequelize.INTEGER(32),
    allowNull: true,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //   role: {
  //     type: Sequelize.INTEGER(32),
  //     allowNull: true,
  //   },

  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  gender: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});
// Provider.associate = models => {
//     Provider.hasOne(models.Role);
//   };
// users.associate = (models) => {
//   users.belongsToMany(models.driver_journies, {
//     foreignKey: "userId",
//     through: "UserJourney",
//     as: "driver_journies",
//   });
// };
// Provider.hasMany(Day, { foreignKey: 'provider_id' });
module.exports = User;
