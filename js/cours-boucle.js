// 1ER EXEMPLE : La boucle possède un index qui compte les "tours" (appelés "itérations")
// Le mot clé pour la boucle est "for"
// 1er paramètre : on initialise l'index à 0
// 2nd paramètre : on définit la condition d'arrêt
// 3eme paramètre : l'opérateur "++" correspond à "+1"
for (let index = 0; index < 10; index++) {
    console.log(index); // 0 1 2 3 4 5 6 7 8 9
}

// 2ND EXEMPLE : La boucle parcourt les éléments de la liste
// "fruits" est la liste à parcourir
// "fruit" est le nom que l'on donne à chacun des éléments
const fruits = ["melon", "fraise", "banane", "pêche", "poire"]
for (const fruit of fruits) {
    console.log(fruit); // melon fraise banane pêche poire
}