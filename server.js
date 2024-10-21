const http = require("http"); // Création de serveur web
const fs = require("fs"); // Gesion des fichiers
const path = require("path"); // Outils pour les chemins de fichiers 
const port = 8000

http.createServer(function (req, res) {
  if (req.url === "/") {
    // PAGE D'ACCUEIL : http://localhost:8000
    const htmlIndexPath = path.join(__dirname, "/views/", "index.html") // Récupère le chemin d'accès à index.html
    const htmlIndex = fs.readFileSync(htmlIndexPath, "utf8") // Extrait le contenu du fichier
    res.writeHead(200, { "Content-Type": "text/html" }); // Définis les en-têtes (métadonnées) de la requête
    res.end(htmlIndex); // Envoie le contenu au navigateur du client
  }
  else {
    // PAGE D'ERREUR 404 : http://localhost:8000/*
    const html404Path = path.join(__dirname, "/views/", "404.html") // Récupère le chemin d'accès à 404.html
    const html404 = fs.readFileSync(html404Path, "utf8") // Extrait le contenu du fichier
    res.writeHead(404, { "Content-Type": "text/html" }); // Définis les en-têtes (métadonnées) de la requête
    res.end(html404); // Envoie le contenu au navigateur du client
  }
}).listen(port, () => console.log("Server listening on port", port))