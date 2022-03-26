const Sequelize = require("sequelize");
const db = new Sequelize("tawseelih", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
