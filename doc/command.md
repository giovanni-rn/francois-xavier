# POWERSHELL

- cd _chemin_ : Changer de dossier
- CTRL+C / q : Interrompre le programme en cours
- CTRL+Clic (sur un lien) : Suivre le lien

# GIT

- git init : Intitialiser Git

- git add . : Sélectionne les fichiers pour le commit
- git commit -m "Changements apportés..." : Packet à envoyer
- git push _origin_ _main_ : Envoyer le commit sur GitHub

- git status : Informations sur le commit en cours
- git log : Historique des commits (Appuyer sur "Enter" jusqu'à "END")

# pour télécharger "pull"

- git fetch _origin_ : Vérifier la nouvelle version depuis GitHub
- git pull _origin_ _main_ : Télécharger le projet

- git branch -M _main_ : Renommer la branche actuelle

- git reset --hard _origin_/_main_ : (!) Réinitialiser le code local pour correspondre au répertoire distant
- git reset _hash_ --hard : Restaurer un commit précis à partir de son ID (hash)

# Bibliothèques NODEJS

- npm (Node Package Manager) : Gestionnaire de paquets pour Node.js (donc pas une bibliothèque mais un programme)

- node:http : Créer un serveur web
- node:fs : Gérer le système de fichiers
- node:path : Outils pour gérer les chemins d'accès aux fichiers
- express : Framework minimaliste pour créer des applications web

# Carectères spéciaux JS

- \n : Ajouter un saut de ligne
- \t : Ajouter une tabulation
- ctrl + C où simplement la lettre q interrompre le programme en cours où sortir du log
- ctrl + click sur http pour voir toutes les fonctions
- alt + Z permet d'adapter la longueur des lignes de code à la fenêtre de visualisation
- hash c'est le nom de l'identifiant

# Vérifier : être dans le bon dossier

- git status

# Revenir à mon commit précédent

- git reset et coller l'identifiant qui a été copié dans git log puis --hard
- pour sortir du log q où ctrl + c
