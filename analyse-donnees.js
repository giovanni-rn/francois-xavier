import users from "./data_users.js"; // Importation de la "base de données"

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
function getAllName(users) {
    const result = [];
    for (const user of users) {
        result.push(user.nom);
    }
    return result;
}

console.log("nom de tous les utilisateurs:", getAllName(users));


// Renvoie l'email des utilisateurs non abonnés
function getNonProEmail(data) {
    const result = [];
    for (const user of data) {
        if (user.status !== "Pro") {
            result.push(user.email);
        }
    }
    return result;
}

console.log("Email des utilisateurs non abonné:", getNonProEmail(users));


// Renvoie le nom des abonnés ayant un mot de passe trop court ( < 8 caractères )
function getShortPasswordProName(data) {
    const result = [];
    for (const user of data) {
        if (user.status === "Pro" && user.mdp.length < 8) {
            result.push(user.nom);
        }
    }
    return result;
}

console.log("Abonné ayant un mot de passe trop court :", getShortPasswordProName(users));


// Renvoie l'identifiant des abonnés vivant en Allemagne
function getGermanProId(data) {
    const result = [];
    for (const user of data) {
        if (user.status === "Pro" && user.pays === "Allemagne") {
            result.push(user.id);
        }
    }
    return result;
}

console.log("id des abonnés vivant en Allemagne:", getGermanProId(users)); // faut-il respecter la casse de id / ID ?