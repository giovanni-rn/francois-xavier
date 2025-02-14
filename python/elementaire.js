// VARIABLES
var viande1 = "poulet" // ancienne (obsolète)

let viande2 = "poulet" // modifiable
const viande3 = "poulet" // constante
viande2 = "dinde"

// FONCTIONS
function add(x, y) {
    return x + y
}

add(1, 2) // calcule 3 mais n'affiche rien
console.log(add(1, 2)); // calcule 3 et affiche 3 dans le terminal


// Types de données (simple)
const nombre = 45 // number
const chaineDeCaracteres = "Agneau"
const booléen = true // boolean
const rien = null // null
let nonDefini // undefined

// Types de données (complexe)
const liste = [23, true, "ABC", 45, [1, 5, 7], null] // array
const dictionnaire = { cle: "valeur" } // object
function fonction(x, y) { return x + y } // function




// supprimer une var


// Méthode = fonction d'un objet | ex: console.log()
// Attribut = propriété = variable d'un objet | ex: Number.MAX_VALUE




// TYPES DE DONNEES
// Liste = tableau = array = ensemble d'éléments (accessible par indice)
[]

// Dictionnaire (Py) = objet (Js) = paire clé-valeur
const voitures = {
    marque: "audi",
    modele: "A8"
}
voitures.modele = "A7" // Je peux modifier une seule valeur via sa clé
voitures = {} // Erreur: voitures is const

// CONDITIONS
// if ()

// BOUCLES