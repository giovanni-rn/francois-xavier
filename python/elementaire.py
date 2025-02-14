# Commentaire...

viande1 = "poulet"
viande1 = "dinde"

def add(x, y):
    # à l'interieur de la fonction
    fruit = "fraise"
    print(fruit)
    def substract(x, y):
        return x - y
    return x + y
# à l'exterieur de la fonction

add(1, 2)

# TYPES DE DONNEES
# Types de données simples
nombreEntier = 45 # integer (int)
nombreDecimal = 45.78 # float
chaineDeCaracteres = "Agneau" # string (str)
booleen = True # boolean (bool)
rien = None # null
# nonDefini # undefined -> erreur

# Types de données complexes
liste = [23, True, "ABC", 45, [1, 5, 7], None] # list
dictionnaire = { "cle": "valeur" } # dict
tuple = ("a", "b", "c") # tuple (immuable)
set = {3, 6, 7} # set (pas de doublon)