const http = require("http");

function handleRequest(request, response) {
  if (request.url === "/currenttime") {
    response.statusCode = 200;
    response.end("<h1>" + new Date().toISOString() + "</h1>");
  } else if (request.url === "/") {
    response.statusCode = 200;
    response.end("<h1>Hello World!</h1>");
  }
  // localhost:3000/current-time
  // localhost:3000
}

const server = http.createServer(handleRequest);

server.listen(3000);

/// ctrl alt = n to run the code
/// clt + c to stop the code
