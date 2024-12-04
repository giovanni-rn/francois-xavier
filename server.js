const express = require('express');
const { join } = require('node:path');
const app = express();
const { createServer } = require('node:http');
const server = createServer(app);

app.use(express.static(join(__dirname)));

app.get("/test", function (req, res) {
  res.send("🐔")
})

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
