// POO = Programmation Orientée Objet (OOP) : Utilisation de classes

class Car {
    // ATTRIBUTS = VARIABLES = INFORMATIONS
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isRunning = false;
    }

    // METHODES = FONCTIONS = ACTIONS
    start() {
        if (!this.isRunning) {  // if (this.isRunning === false) {
            this.isRunning = true;
            console.log(`${this.make} ${this.model} has started.`);
        } else {
            console.log(`${this.make} ${this.model} is already running.`);
        }
    }

    stop() {
        if (this.isRunning) { // if (this.isRunning === true) {
            this.isRunning = false;
            console.log(`${this.make} ${this.model} has stopped.`);
        } else {
            console.log(`${this.make} ${this.model} is already stopped.`);
        }
    }

    displayDetails() {
        console.log(`Car Details: ${this.year} ${this.make} ${this.model}`);
    }
}

// Création d'un objet (instance) de la classe Car
const toyota = new Car("Toyota", "Corolla", 2020);
const mercedes = new Car("Mercedes", "Simplex", 1902);

// APPEL ATTRIBUTS
console.log(toyota.make);
console.log(toyota.model);

// APPEL METHODES
toyota.displayDetails(); // Output: Car Details: 2020 Toyota Corolla
toyota.start();          // Output: Toyota Corolla has started.
toyota.stop();           // Output: Toyota Corolla has stopped.
toyota.start();          // Output: Toyota Corolla is already running.
