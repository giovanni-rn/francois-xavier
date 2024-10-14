import users from "./data_users.js";
// Définition des fonctions
// Renvoie l'email de tout le monde
function getAllEmail(users) {
  // pourquoi data et non pas Données où "users"
  const result = [];
  for (const user of users) {
    result.push(user.email);
  }
  return result;
}
console.log("Email de tous :", getAllEmail(users));

// Renvoie le nom des abonnés pro
function getProName(data) {
  const result = [];
  for (const user of data) {
    if (user.status === "Pro") {
      result.push(user.nom);
    }
  }
  return result;
}
console.log("Nom des pro :", getProName(users));

// Renvoie le nom des abonnés pro vivant en France
function getProFranceName(data) {
  const result = [];
  for (const user of users) {
    if (user.status === "Pro" && user.pays === "France") {
      result.push(user.nom);
    }
  }
  return result;
}
console.log("Nom des français pro :", getProFranceName(users));

// Renvoie le nom de tous les utilisateurs

function getAllName(users) {
  const result = [];
  for (const user of users) {
    result.push(user.nom);
  }
  return result;
}
console.log("nom de tous les utilisateurs:", getALLName(users));

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
console.log(
  "Abonné ayant un mot de passe trop court < 8 caractères:",
  getShortPasswordProName(users)
);

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
console.log("id des abonnés vivant en Allemagne:", getGermanProId(data)); // faut-il respecter la casse de id / ID ?
