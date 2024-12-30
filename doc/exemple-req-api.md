1. Navigateur demande la page au serveur (http://localhost:3000/signup.html)
2. Serveur renvoie le fichier statique (signup.html)
3. Navigateur affiche la page sur l'écran
4. Utilisateur remplit le formulaire et valide
5. Navigateur fait une req POST (grâce a fetch()) qui contient les données du formulaire (au format JSON)
6. Serveur reçoit la req et traite les données
7. Serveur répond en envoyant un message de confirmation au navigateur
8. Navigateur affiche le message de confirmation dans la console
