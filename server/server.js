//wap in node Js to http server

//http require 
const http = require('http');
//port
const PORT=8080;

// create server using http object
const server = http.createServer((request,response)=>{
	
response.writeHead(200,{"Content-Type":"text/plain"}); //header set 
response.write("<h1>Server Started </h1>");     //write the data to the browser
                                                //and return the response.
response.end(); //Server Response End. => because until, response End the server 
//keep loading, and waiting for the request.

});

//listen to the port
server.listen(PORT,function(){
   console.log('server started at port ='+PORT);	
	
}); //Asynchronous : callback 










