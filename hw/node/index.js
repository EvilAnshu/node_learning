const http = require("http");
const PORT = 8080;

const server = http.createServer((request, response) => {

    response.write("Hello");
    response.end();
});
server.listen(PORT,function(){
    console.log("Server Started");
    console.log(process.argv);
});