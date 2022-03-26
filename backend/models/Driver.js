const Sequelize = require("sequelize");
const db = require("../db");

let Driver = db.define("Driver", {
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

  age: {
    type: Sequelize.STRING,
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
  car_type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Driver.associate = (models) => {
  Driver.hasMany(models.DriverJourney);
};
// providers.associate = (models) => {
//     providers.belongsToMany(models.srvices, {
//       foreignKey: 'providerId',
//       through: 'provider_services',
//       as: 'services'
//     });
//   };
// Provider.hasMany(Day, { foreignKey: 'provider_id' });
module.exports = Driver;
