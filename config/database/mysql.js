var Sequelize = require("sequelize");
var db = new Sequelize("railway", "root", "bVBb1tEEtwKWbswieUfy", {
  host: "containers-us-west-170.railway.app",
  port: "5520",
  dialect: "mysql",
});

module.exports = db;
