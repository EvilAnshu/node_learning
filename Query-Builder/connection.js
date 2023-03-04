const mysql = require("mysql");
const config = require("./config/config.json");
const connection = mysql.createConnection(config.dbconnection.mysql);

try{
  connection.connect();
  console.log('connection created');
}catch(error){
    console.log('Connection Error'+error);
}

module.exports = connection;
