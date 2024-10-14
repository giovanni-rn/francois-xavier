// TYPES DE DONNEES
// Créer une var contenant une phrase quelconque
const textVictor = "Victor Hugo fût toute sa vie un homme à femme, il aima les femmes avec succès. L'âge venant et ayant evidemment moins de conquete, il commenca à frequenter les prostitués et comme il faisait très attention à ses dépenses,il notait toutes ses moindres dépenses dans un carnet qu'il avait toujours sur lui. Ses Carnets ont été retrouvés. Elegamment il notait sa dépense ainsi: On est pas de bois !"

// pour sauter une ligne le raccourci \n
// Créer une var contenant un nombre décimal
const nombre = 3.14159;

// Créer une liste contenant au moins 3 éléments
var maListe = ["Photo", "Moto", "Sport"];

// Afficher le premier élément de la liste créée ci-dessus
console.log(maListe[0]);

// Créer un objet qui recense diverses informations sur une moto. La différence dans la syntaxe entre Liste et Objet ce sont les crochets pour la Liste et les Accolades pour Objet
const moto = {
  marque: "Moto Guzzi",
  modele: "V100 Mandello S",
  puissance: "115 chevaux a 8800 tr/mn",
  couple: "105 NM"
}

// Ajouter une paire clé-valeur à l'objet créé ci-dessus (sans modifier les lignes précédentes)
console.log(moto["cardan"])
moto["cardan"] = true
console.log(moto["cardan"]);


// FONCTIONS
//Créer une fonction subtract() qui permet d'effectuer une soustraction

function subtract(a, b) {
  return a - b
}
console.log(subtract(17, 9));
console.log(subtract(0, -2));
console.log(subtract(17, 9)) // 8
console.log(subtract(0, 2)) // -2


// Créer une fonction divide() qui permet d'effectuer une division
function divide(a, b) {
  return a / b
}
console.log(divide(10, 2))
console.log(divide(0, 2))
console.log(divide(49, 7)) // 7
console.log(divide(24, 6)) // 4


// Créer une fonction firstChar() qui renvoie le premier caractère d'un string (indice: les string utilisent les indices, comme les listes)
let firstChar = "Victor Hugo"
firstChar = function(str) {
  return str[0];


}
console.log(firstChar("Victor Hugo"))
console.log(firstChar("L'age venant"))
console.log(firstChar("Poulet")) // P
console.log(firstChar("je code en javascript")) // j




// Créer une fonction concatenation() qui met deux string "bout-à-bout" (indice: 2 string en paramètres mais un seul string est renvoyé)
function concatenation(str1, str2) {
  return str1 + str2
}

console.log(concatenation("Victor Hugo", " est un homme"))
console.log(concatenation("A", "B")) // AB
console.log(concatenation("Francois", "-Xavier")) // Francois-Xavier



// Créer une fonction videur() qui renvoie true si le nombre en paramètre est supérieur ou égal à 18 et false si le nombre est strictement inférieur à 18 (indice: utilise if/else)
function videur(age) {
  // return age >= 18
  if (age >= 18) {
    return true
  } else {
    return false
  }
}

ageFrancois = 45
ageClaude = 18
ageLucien = 8
console.log(videur(ageFrancois)) // true
console.log(videur(ageClaude)) // true
console.log(videur(ageLucien)) // false



// Créer une fonction glouton() qui renvoie false si la liste contient 5 éléments ou moins, et true si la taille est strictement supérieure à 5 (indice: utilise l'attribut "length")
function estGlouton(assiette)  {
  if (assiette.length > 5) {
    return true ;
  }    else {
      return false;
      }
    }


const assietteFrancois = ["schnitzel", "saucisses allemandes", "bretzels", "käsespätzle", "bouillon"];
const assietteOriano = ["poulet rôti", "cuisse de canard", "oeuf à la coque", "saumon fumé", "agneau (entier)", "un peu de salade quand même"];
  console.log("Est-ce que Francois est un glouton ?", estGlouton(assietteFrancois)); // false
  console.log("Est-ce que Oriano est un glouton ?", estGlouton(assietteOriano)); // true



// Créer une fonction checkType() qui vérifie que le paramètre est bien un nombre (indice: utilise le mot-clé "typeof")

function checkType(param) {
  return typeof param == "number";
}

console.log(checkType(476));        // true
console.log(checkType(67 + 7 + 4)); // true
console.log(checkType("Salut"));    // false
console.log(checkType("82"));       // false
// console.log(checkType(476)) // true
// console.log(checkType(67 + 4)) // true
// console.log(checkType("Salut !")) // false
// console.log(checkType("82")) // false