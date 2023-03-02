const mysql = require("mysql");
const config = require("./config/config.json");

const connection = mysql.createConnection(config.dbconfig.mysql);
try{
    connection.connect();
   console.log('Connection Created success');

}catch(error){
    console.log('Connection Error'+error);
}
connection.end();
