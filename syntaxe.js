// Types de variable
const variableFixe = "ne change pas"
let variableDynamique = "change" // Moins sûre
variableDynamique = "a changé"

/* Règle de noms
- Un seul mot, pas d'espace
- Premier caractère doit être : lettre minuscule, "_", "$"
- Le nom doit être utilisé pour une seule variable/fonction dans la même portée
*/

// Casses
const sentence = "Ceci est une phrase"
const majuscule = "CECI EST UNE PHRASE"
const minuscule = "ceci est une phrase"
const camel = "ceciEstUnePhrase" // Valide pour les variables
const pascal = "CeciEstUnePhrase"
const snake = "ceci_est_une_phrase" // Valide pour les variables
const kebab = "ceci-est-une-phrase"