const http = require("http");
const port = 8000
http.createServer(function (req, res) {
    if (req.url === "/about") res.end("Site très pertinent:)")
    else res.end("URL non définie")
  }).listen(8000, { => console.log("Server listening on port", )})
