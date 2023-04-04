require('dotenv').config();

console.log(process.env.PORT);

const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');
const config = require('./config/config.json');

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

const DBconnection  = process.env.CONNECTION || config.database.mongodb.atlas;

//Promise Object 
server.listen(PORT,()=>{

    console.log('Server started at port:'+PORT);
    
    mongoose.connect(DBconnection,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log('Connection Created.');
    }).catch((error)=>{
        console.log('Error in Connecting with DB.'+error);
    });

});




