/*EXERCICES 2
1. Créer une liste pays qui contient deux objets. Ces deux objets correspondent respectivement à la France et à l'Allemagne. Il faudra donc y ajouter les différentes informations relatives à ces pays. C'est à toi de choisir quelles informations tu veux y mettre (nom, gentilé, nombre d'habitants, etc), mais il doit y avoir au moins : une chaîne de caractères, un nombre et un booléen.

2. Créer une fonction searchData() qui permet de passer deux paramètres : source (qui sera un objet) et key (qui sera un string). La fonction doit renvoyer la valeur correspondante à la clé key, dans l'objet source passé en paramètre.

Par exemple, si j'ai une variable france qui contient un objet avec diverses informations sur la France, et que j'appelle :

searchData(france, "gentilé")

La fonction est censé me renvoyer "français" (si tant est que l'objet France contient bel et bien une clé "gentilé").


Pour rappel : dans un objet JS, les paires, s'appellent des paires "clé-valeur" (ou value-key, en anglais).
*/

// Liste Pays

// type de pays  : liste de 2 objets
// objet : paires clé-valeur

// pays[1] : Objet Allemagne
// pays[1].idh : 0.947
// pays[0].monnaie : Euro
// pays[0].premier_Ministre : Michel Barnier


const pays = [ 
    {
       nom               : "France",
       capitale          : "Paris",
       population        : 67000000,
       superficie_KM2    : 643.801 ,
       langue_officielle : "Francais",
       monnaie           : "Euro",
       membreUE          : true ,
       gouvernement      : "Republique Semi_Presidentielle",
       president         : "Emmanuel Macron",
       premier_Ministre  : "Michel Barnier",
       pib_Trillon_USD   :  2.78 ,
       idh               : "0.901" ,
       espérance_de_vie  : 82.5 ,
       tauxDeChomage     : "0.08 " ,
       principalesIndustries : ["Aeonautique", "Automobiles", "Luxe", "Agroalimentaire" ],
       Tourisme          : 89000000 ,
       education         : "Systeme educatif public gratuit",
       sante             : "Systeme de sante universel" ,
       culture           : "Musées, Monuments historiques, Jeux Olympiques 2024" ,
       sport             : "Football,rugby,tennis",
       climat            : "Tempere avec des variations regionales",
       regions           : "18 regions administratives incluant les DOM-TOM" ,
       departements      : "101 Departements, 96 en métropole, 5 Outre-mer" ,
       communes          : "34935 communes" ,
       superficieEauxTerritoriales_KM2 : 11000000  ,
       superficie_capitale_KM2         : 105.4  


    },

    { 
       nom               : "Allemagne",
       capitale          : "Berlin",
       population        :  83000000,
       superficie_KM2    :  643.801 ,
       langue_officielle : "Allemand",
       monnaie           : "Euro",
       membreUE          : true ,
       gouvernement      : "Republique federale parlementaire",
       president         : "Frank-Walter Steinmeyer",
       chancelier        : "Olaf Scholz",
       pib_Trillon_USD   : "4.2" ,
       idh               : "0.947" ,
       espérance_de_vie  : 81 ,
       tauxDeChomage     : "0.05 " ,
       principalesIndustries : "Automobiles, ingenierie, chimie, electronique",
       Tourisme          : 39000000 ,
       education         : "Systeme educatif public gratuit",
       sante             : "Systeme de sante universel" ,
       culture           : "Nombreux Musées et Monuments historiques" ,
       sport             : "Football, handball, athletisme",
       climat            : "Tempere avec des variations regionales" ,      
       etats_federaux    : "16 Länder " ,
       communes          : "10795 communes" ,
       superficieEauxTerritoriales_KM2 : 57485 ,
       superficie_capitale_KM2         : 891   

    }
 ];


// Déclaration de la fonction
function searchData(objet, cle) {
   return objet[cle]
}

// Exemple d'objet
const fx = {
   "nom": "François",
   "age": 65,
   "petit": false
}
console.log(fx["age"]);

// Affichage des résultats

searchData(fx, "age") == 65 // true

const francois = searchData(fx, "nom") // "François"
console.log(francois) // Affiche "François"

console.log(searchData(fx, "nom")) // Affiche "François"
console.log(searchData(pays[1], "gouvernement")) // "Republique federale parlementaire"

const listeDeFruits = ["fraise", "banane"]