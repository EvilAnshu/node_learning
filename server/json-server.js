const http = require('http');


const PORT=8080;
const server = http.createServer((request,response)=>{
console.log(student);   
response.writeHead(200,{"Content-Type":"application/json"});
response.write(JSON.stringify(student)); //method used to write string value response to Browser //String data.
response.end();
});

server.listen(PORT,function(){
   console.log('Server Started '+PORT);
})

