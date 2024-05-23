//Notazione funzione Costruttore
function Auto(marca, modello, cilindrata, marcia) {
    this.marca = marca;
    this.modello = modello;
    this.cilindrata = cilindrata;
    this.marcia = marcia;

    this.info = function () {
        return "Automobile: " + this.marca + " " + this.modello + " " + this.cilindrata;
    }
}

let auto1 = new Auto("Volvo", "XC90", 2000, 6);
let auto2 = new Auto("Lancia", "Delta", 1600, 5);
let auto3 = new Auto(12, 25, 1000);

console.log(auto1.info());
console.log(auto3.info());

class Moto {
    #marca;
    constructor(marca, modello, cilindrata, velocita) {
        this.#marca = marca;
        this.modello = modello;
        this.cilindrata = cilindrata;
        this.velocita = velocita;
    }

    static tipologia = "MOTOCICLETTA";

    //Metodo
    accendi() {
        return "VROOOOOM";
    }

    getMarca() {
        return this.#marca;
    }

    static calcolaDiffVel(m1, m2) {
        let differenza = m1.velocita - m2.velocita;
        return differenza;
    }
}


let miaMoto = new Moto("Kawasaki", "z750", 750, 100);
console.log(miaMoto.accendi());
console.log(miaMoto.getMarca() + " " + miaMoto.modello);
console.log(miaMoto.tipologia); //undefined
console.log(Moto.tipologia);

let tuaMoto = new Moto("Piaggio", "Ciao", 49, 34);

console.log(Moto.calcolaDiffVel(miaMoto, tuaMoto));

let parcoMoto = [
    new Moto("Guzzi", "Scrambler", 800, 95),
    new Moto("BMW", "K100", 1000, 120),
    new Auto("Fiat", "600", 1100, 4),
    true
]

parcoMoto.push(new Auto("Mercedes", "GLC", 3200, 8));

parcoMoto.forEach(veicolo => {
    for (const key in veicolo) {
        if (typeof veicolo[key] != "function") {
            const valore = veicolo[key];
            console.log(valore);
        }
    }
})