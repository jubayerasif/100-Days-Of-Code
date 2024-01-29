const express = require("express");

const app = express();

app.use(
  express.urlencoded({
    expended: false,
  })
);

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}); // localhost:3000 /currenttime

app.get("/", function (req, res) {
  res.send(
    "<form action='/store-user' method='POST'><label>Your Name:</label><input type= 'text'><button>Submit</button></form>"
  );
}); // localhost:3000

app.post("/store-user", function (req, res) {
  const userName = req.body.username;
  console.log(userName);
  res.send("<h1>Username Stored!</h1>");
});

app.listen(3000); // Start the server on port 3000

// function handleRequest(request, response) {
//   if (request.url === "/currenttime") {
//     response.statusCode = 200;
//     response.end("<h1>" + new Date().toISOString() + "</h1>");
//   } else if (request.url === "/") {
//     response.statusCode = 200;
//     response.end("<h1>Hello World!</h1>");
//   }
// }

// const server = http.createServer(handleRequest);

// server.listen(3000);

/// ctrl alt = n to run the code
/// clt + c to stop the code
