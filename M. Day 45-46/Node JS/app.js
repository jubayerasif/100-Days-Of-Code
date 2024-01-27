const http = require("http");

function handleRequest(request, response) {
  response.statusCode = 200;
  response.end("<h1>Hello World!</h1>");
}

const server = http.createServer(handleRequest);

server.listen(3000);


/// ctrl alt = n to run the code
/// clt + c to stop the code



