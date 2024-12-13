const express = require('express');
const { join } = require('node:path');
const app = express();
const { createServer } = require('node:http');
const server = createServer(app);

app.use(express.static(join(__dirname))); // ex: http://localhost:3000/signup.html

app.get("/test", function (req, res) {
  res.send("🐔")
});

// ex: http://localhost:3000/signup-user
app.post("/signup-user", function (req, res) {
  // req.body = {
  //   username: username,
  //   pasword: password,
  //   email: email,
  // };
  req.body
})

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
