//notazione letterale per obj
let studente = {
    nome: "Pippo",
    cognome: "Rossi",
    matr: 123,

    studia: function () {
        return this.nome + " " + this.cognome + " sta studiando"
    }
}

class Docente {
    constructor(nome, cognome, corso) {
        this.nome = nome;
        this.cognome = cognome;
        this.corso = corso;

        this.insegna = function () {
            return "Il docente " + this.nome + " " + this.cognome + " sta insegnando sul corso: " + this.corso;
        };

        this.toString = function () {
            for (const key in this) {
                console.log(key + ":" + this[key]);
            }
        }
    }
}

let docenteJAVA = new Docente("Mauro", "Bogliaccino", "JAVABE");
let docenteJS = new Docente("Dario", "Mennillo", "TSS");
let docenteDB = new Docente("Oscar", "Vecchione", "JavaWeb");

//Adesso voglio trasformare i miei oggetti in oggetti formato JSON
let studenteJSON = JSON.stringify(studente);
console.log(studente); //Questo è l'oggetto in JS
console.log(studente.nome); //Questo è l'oggetto in JS
console.log(studente.cognome); //Questo è l'oggetto in JS

console.log(studenteJSON); //Questo è l'oggetto in JSON
console.log(typeof studenteJSON); //Questo è l'oggetto in JSON
console.log(studenteJSON.nome);

//Posso anche trasformare il mio docente in JSON
console.log(JSON.stringify(docenteJS));


//IMMAGINIAMO DI DOVER RICEVERE UN OGGETTO FORMATO JSON, QUINDI UNA STRINGA
let studente4JSON = '{"nome": "Anna", "cognome": "Verdi", "matricola": 321}';

//trasformo questa string in un oggetto
let studente4 = JSON.parse(studente4JSON);

console.log(studente4.nome);
console.log(studente4.cognome);
console.log(studente4.matricola);

//Faccio la stessa cosa con il docente
let docente4JSON = '{"nome": "Luca", "cognome":"Ceroni", "corso": "Sicurezza"}';

let docente4OBJ = JSON.parse(docente4JSON);
console.log(docente4OBJ);

let docente4 = new Docente(docente4OBJ.nome, docente4OBJ.cognome, docente4OBJ.corso);

console.log(docente4);
console.log(docente4.insegna());

let listaDocenti = [
    docenteJAVA,
    docenteDB,
    docenteJS,
    docente4
];

let elListaDoc = document.getElementById("elListaDoc");

listaDocenti.forEach(docente => {
    elListaDoc.innerHTML += "<li>" + docente.insegna() + "</li>";
})