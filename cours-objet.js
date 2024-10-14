// Liste (tableau, array)
const fruits = ["fraise", "citron", "banane"]
console.log(fruits[1], fruits[0])

// Objet (dictionnaire)
const fx = {
  nom: "Pozin",
  prenom: "François-Xavier",
  age: 42,
  occupations: ["drone", "architecture", "moto", "code"]
}
console.log(fx["prenom"])
console.log(fx.nom)

console.log(fx.occupations[2])

// Liste d'objets
const projetsRoye = [
  {
    "ID": 651628362,
    "Nom": "Musée Mur Berlin",
  },

  {
    "ID": 651628362,
    "Nom": "Sans souci",
  },

  {
    "ID": 651628362,
    "Nom": "Sony Center",
  }
]

console.log(projetsRoye[2])
console.log(projetsRoye[2].Nom)