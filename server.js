const express = require("express");
const { join } = require("node:path");
const app = express();
const { createServer } = require("node:http");
const server = createServer(app);

app.use(express.static(join(__dirname))); // ex: http://localhost:3000/*.html
app.use(express.json()); // Traiter les données au format JSON

// ex: http://localhost:3000/test
app.get("/test", function (req, res) {
  res.send("🐔");
});

// ex: http://localhost:3000/signup-user
app.post("/signup-user", function (req, res) {
  console.log(
    req.originalUrl,
    req.method,
    req.headers,
    req.ip,
    req.host,
    req.path,
    req.statusCode,
    req.body
  );
  res.status(200).json({ Message: "User created" }); // Renvoyer un message de confirmation au navigateur
});
app.post("/api/projects", (req, res) => {
  const newProject = req.body;
  projects.push(newProject);
  console.log("New project added:", newProject);
  res.status(201).json({ message: "Project added successfully" });
});
server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
