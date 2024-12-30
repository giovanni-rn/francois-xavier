// IMPORTER BIBLIOTHEQUES
const express = require("express");
const { join } = require("node:path");
const app = express();
const { createServer } = require("node:http");
const server = createServer(app);
const sqlite3 = require("sqlite3").verbose();

// BASE DE DONNEES
// Créer la base dans le fichier "adt.db"
const db = new sqlite3.Database("adt.db", (err) => {
  if (err) console.error(err);
  console.log("Connected to the DB.");
})

// Créer la table des utilisateurs "User" en langage SQL (Strcutured Query Language)
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    email TEXT,
    password TEXT
    )
    `)
})

// Architecture MVC : Model (dB) View (Pages HTML) Controller (APIs)

// MIDDLEWARE (Avant APIs)
// app.use() sert à utiliser un middleware, càd vérifiée avant les APIs
// Renvoie les ressources statiques destinées à être exécutées sur le navigateur (client) (ex. html, css, img, fonts)
app.use(express.static(join(__dirname))); // ex: http://localhost:3000/*.html

// Traiter les données au format JSON
app.use(express.json());


// API ENDPOINTS
// ex: http://localhost:3000/test
app.get("/test", function (req, res) {
  res.send("🐔");
});

// ex: http://localhost:3000/signup-user
app.post("/signup-user", function (req, res) {
  // console.log(req.originalUrl, req.method, req.ip, req.body);
  // const msg = "User " + req.body.username + " created"

  db.run(`
    INSERT INTO user (username, email, password)
    VALUES (${req.body.username}, ${req.body.email}, ${req.body.password})
    `, (err) => {
    if (err) console.error(err.message);
    else console.log(`Data inserted with ID: ${this.lastID}`);
  });

  res.status(201).json({ message: `User ${req.body.username} created.` }); // Renvoyer un message de confirmation au navigateur
});

app.post("/api/projects", (req, res) => {
  const newProject = req.body;
  projects.push(newProject);
  console.log("New project added:", newProject);
  res.status(201).json({ message: "Project added successfully" });
});

// LANCER LE SERVEUR
// cette ligne permet d'écouter un port sur le serveur (le client se trouvant sur son navigateur)
// sans cette ligne pas de serveur
server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
