import { createServer } from "http";
const port = 8000
// "http://localhost:8000/about"

createServer(function (req, res) {
  if (req.url === "/about") {
    const msg = "Site très pertinent :)"
    res.end(msg)
  }
  else {
    res.end("404 : URL non définie")
  }
}).listen(port, () => console.log("Server listening on port", port))
