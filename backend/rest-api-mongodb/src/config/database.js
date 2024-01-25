const mysql = require("mysql")

const connectionPool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '082110',
  database : 'db_webserviceapi',
  port     : 3307
});
connectionPool.getConnection(function(err) {
  if (err) {
    throw err
  }
});


module.exports = {
    connectionPool
  }

