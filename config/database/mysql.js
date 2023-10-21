var Sequelize = require("sequelize");
var db = new Sequelize("express", "root", "tanah_jawaku", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = db;
