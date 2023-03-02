const http = require("http");
const StudentController = require("./controller/StudentController");
const PORT = 8080;

let server = http.createServer((req,res)=>{
	
res.writeHead(200,{
	"Content-Type":"application/json",
});

res.write(JSON.stringify( StudentController.getStudentData() ,null,4));
res.end();

});

server.listen(PORT,()=>{
   console.log('Server Started in port ='+PORT);
})