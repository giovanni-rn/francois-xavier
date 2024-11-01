// Créer une fonction qui renvoie le plus grand nombre
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(max(1, 2)) // 2
console.log(max(34, 9)) // 9

for (let i = 0; i < 3; i++) {
    console.log(max(1, 2))
    console.log(max(34, 9));
}

let i = 0;
while (i < 2) {
    console.log(max(1, 2));
    console.log(max(34, 9));
    i++;
}

/*j'ai enfin compris que while et let n'ont pas la même syntaxe
for (let index = 0; index < 10; index++) {
    console.log(index);
je me suis tartiné une boucle infinie.*/



// EXEMPLE: Après 'return', on quitte la fonction
function exemple() {
    console.log("salut") // affiché
    const somme = 2 + 2
    return somme
    console.log("salut") // pas affiché
}



// Créer une fonction "dé" qui renvoie un nombre aléatoire entre 1 et 6
function de() {
    return Math.round(Math.random() * 5) + 1;
}
console.log(de())

for (let i = 0; i < 10; i++) {
    console.log(de());
}



// Créer une fonction qui affiche les nombres de 1 à 20
function vingt() {
    for (let index = 1; index <= 20; index++) {
        console.log(index)
    }
}
vingt();

// En l'ajoutant à une chaîne (concaténation)
function vingtHorizontal() {
    let reponse = ""
    for (let index = 1; index <= 20; index++) {
        reponse += index
        reponse += " "
    }
    return reponse
}
console.log(vingtHorizontal());

// En l'ajoutant à une liste ()
function vingtListe() {
    const reponse = []
    for (let index = 1; index <= 20; index++) {
        reponse.push(index) // Ajouter un élément à la fin
    }
    return reponse
}
console.log(vingtListe());


/* je dois regarder à nouveau ta vidéo pour voir comment afficher horizontalement. Voir Array et lenght
Array({lenght:20}, ( ,1))...?
// console.log(vingt()) // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 */