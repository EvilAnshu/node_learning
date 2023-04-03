const http = require('http'); //package
const app = require('./app'); //file

const server = http.createServer(app);

const PORT = process.env.PORT || '8080';
server.listen(PORT,()=>{

   console.log(` server Started at ${PORT}`);
   
});



