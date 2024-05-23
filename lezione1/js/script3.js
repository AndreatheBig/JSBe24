//Voglio scrivere qualcosa all'interno di demo

//1. Recupero il div con id = "demo"
// let demo = document.getElementById("demo");

// demo.innerHTML = "Ciao, Mondo!!!";

//Faccio la stessa cosa utilizzando le funzioni
// Dichiaro una funzione
function saluta() {
    let demo = document.getElementById("demo"); //variabile locale
    demo.innerHTML = "Ciao, Mondo!!";
}

//Richiamo una funzione
saluta();

//ATT: il richiamo di una funzione è indipendente dalla sua dichiarazione
salutaStudente();

function salutaStudente() {
    let demo = document.getElementById("demo");
    let nome = "Maria";
    demo.innerHTML = "Ciao, " + nome;
}

//Posso richiamare una funzione dall'interno di un'altra funzione
function aggiungiParole() {
    let feed = document.getElementById("feed");
    feed.innerHTML = "Queste sono le prime parole";
    aggiungiAltreParole(feed);
}

/**JSDoc
 * @param {HTMLElement} elementoHtml 
 */
function aggiungiAltreParole(elementoHtml) {
    elementoHtml.innerHTML += ", questo è il resto delle parole";
}

aggiungiParole();

//OSS: var globali o locali
// console.log(nome);

let mioNome = "Dario";

function prendiNome() {
    let mioNome = "Anna";
    console.log(mioNome);
}

prendiNome();
console.log(mioNome);


//FUNZIONI CON PARAMETRI
function calcolaArea(base, altezza) {
    let area = base * altezza;
    return area;
}

let base = 6;
let altezza = 9.5;

let area = calcolaArea(base, altezza);

console.log("L'area vale: " + area);

console.log(calcolaArea(8, 5));

// Espressione funzionale
let calcArea = function (base, altezza) {
    let area = base * altezza;
    // console.log(area);
    return area;
}
console.log(calcArea(5, 7));

function calcolaVolume(base, altezza, profondita) {
    let area = calcolaArea(base, altezza);
    let volume = area * profondita;
    return volume;
}

console.log(calcolaVolume(5, 6, 7));

function calcolaVolume2(area, profondita) {
    let volume = area * profondita;
    return volume;
}

console.log(calcolaVolume2(calcolaArea(5, 6), 7));

//CLOSURE
function calcolaVolume3(base, altezza, profondita) {
    function calcolaArea() {
        let area = base * altezza;
        return area;
    }
    return calcolaArea() * profondita;;
}

console.log(calcolaVolume3(5, 6, 7));

//ESEMPIO
let numeri = [34, 15, 22, 10, 1, 3, 8];

function calcolaPari(numero) {
    if (numero % 2 == 0) {
        return numero + " pari";
    } else {
        return numero + " dispari";
    }
}

//parametro =>
//function(parametro)

let numClick = 0;

function eseguiCalcolo() {
    numClick++;
    if (numClick <= 10) {
        gioco.innerHTML = "";
        numeri.forEach(numero => {
            // console.log(calcolaPari(numero));
            gioco.innerHTML += "<li>" + calcolaPari(numero) + "</li>";
        });
    } else {
        gioco.innerHTML = "<h2>  Bastaaaaaa cliccare !!! </h2>";
        window.alert("Basta click");
    }
}

let gioco = document.getElementById("gioco");

//Recupero il pulsante
let btn = document.getElementById("btn");
//Collego il pulsante tramite addEventListener alla funzione eseguiCalcolo
//ATT: quando richiamo una funzione con l'EventListener NON devo inserire le parentesi tonde
btn.addEventListener("click", eseguiCalcolo);