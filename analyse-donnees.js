/* DONNEES */
const users = [
    {
        id: 1,
        prenom: "Roye",
        nom: "Schmidt",
        status: "Pro",
        pays: "Allemagne",
        email: "roye@gmail.com",
        mdp: "azerty1234"
    },
    {
        id: 2,
        prenom: "Jean",
        nom: "Gabin",
        status: "Free",
        pays: "France",
        email: "jean.gabin@gmail.com",
        mdp: "aze_rtT'r34"
    },
    {
        id: 3,
        prenom: "Claude",
        nom: "Brasseur",
        status: "Pro",
        pays: "France",
        email: "claude.brasseur@gmail.com",
        mdp: "claudeMDP45"
    },
    {
        id: 4,
        prenom: "Olaf",
        nom: "Scholz",
        status: "Pro",
        pays: "Allemagne",
        email: "oscholz@outlook.com",
        mdp: "mot de passe"
    },
    {
        id: 5,
        prenom: "Maurice",
        nom: "Chevalier",
        status: "Pro",
        pays: "France",
        email: "maumau@gmail.com",
        mdp: "mc"
    },
]

/* EXEMPLES */
// Renvoie l'email de tout le monde
function getAllEmail(data) {
    const result = [] // Liste des utilisateurs qui correspondent aux critères
    for (const user of data) { // Pour chaque utilisateur
        result.push(user.email) // J'ajoute son email à la liste
    }
    return result // Je renvoie la liste avec les utilisateurs trouvés
}

console.log("Email de tous :", getAllEmail(users));

// Renvoie le nom des abonnés pro
function getProName(data) {
    const result = [] // Liste des utilisateurs qui correspondent aux critères
    for (const user of data) { // Pour chaque utilisateur
        if (user.status === "Pro") { // Est-il abonné ?
            result.push(user.nom) // J'ajoute son nom à la liste
        }
    }
    return result // Je renvoie la liste avec les utilisateurs trouvés
}

console.log("Nom des pro :", getProName(users));

// Renvoie le nom des abonnés pro vivant en France
function getProFranceName(data) {
    const result = [] // Liste des utilisateurs qui correspondent aux critères
    for (const user of data) { // Pour chaque utilisateur
        if (user.status === "Pro" && user.pays === "France") { // Est-il abonné ET réside-t-il en France ?
            result.push(user.nom) // J'ajoute son nom à la liste
        }
    }
    return result // Je renvoie la liste avec les utilisateurs trouvés
}

console.log("Nom des français pro :", getProFranceName(users));

/* A CODER */

// Renvoie le nom de tous les utilisateurs
// ...

// Renvoie l'email des utilisateurs non abonnés
// ...

// Renvoie le nom des abonnés ayant un mot de passe trop court ( < 8 caractères )
// ...

// Renvoie l'identifiant des abonnés vivant en Allemagne
// ...