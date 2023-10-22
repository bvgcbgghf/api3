var Sequelize = require("sequelize");
var db = new Sequelize("railway", "root", "2hkOXvJ9lnPW7MmFxIxg", {
  host: "containers-us-west-35.railway.app",
  port: "5524",
  dialect: "mysql",
});

module.exports = db;
