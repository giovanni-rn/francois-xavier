// Créer une fonction qui renvoie le plus grand nombre
function max() {
    return(1, 2)

}

   console.log(max(1, 2)) // 2
   console.log(max(34, 9)) // 9

for (let i= 0; i<3; i++) {
    console.log(max(1, 2));
    console.log(max(34,9));
}
 function max(a, b) {
    if(a > b) {
        return a;
    } else {
        return b;
    }
    console.log(1, 2)
    console.log(max(34, 9));
}
let i = 0;
while (i < 2) {
    console.log(max(1, 2));
    console.log(max(34,9));
    i++;
}
 
/*j'ai enfin compris que while et let n'ont pas la même syntaxe
for (let index = 0; index < 10; index++) {
    console.log(index);
je me suis tartiné une boucle infinie.*/
  
   
    
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

/* je dois regarder à nouveau ta vidéo pour voir comment afficher horizontalement. Voir Array et lenght
Array({lenght:20}, ( ,1))...?
// console.log(vingt()) // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 */