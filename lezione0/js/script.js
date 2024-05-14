// Commento JS
/**
 * commento multi riga
 */

let saluto = "Ciao, Mondo";

console.log(saluto);

let mioNome = "Dario Mennillo";
let eta = 35;
let presenza = true;
var corso = "JavaBackEnd";

console.log("Ciao " + mioNome + ", età: " + eta + " corso: " + corso + " presenza: " + presenza);

// JS è DEbolmente Tipizzato
let miaVariabile = 42;
console.log(miaVariabile);

miaVariabile = 40;
console.log(miaVariabile);

// Qui sto cambiando il tipo in una riassegnazione. Si fa ? NOOOOO
miaVariabile = "Un numero a caso";
console.log(miaVariabile);

let numero1 = 5;
let numero2 = 9;
let somma = numero1 + numero2;

console.log("La somma tra i due numeri vale: " + somma);
console.log(typeof numero1);
console.log(typeof 0.25115125842654212565421);
console.log(typeof true);
console.log(typeof "Ciao come stai ? ");

let valoreNull = null;
console.log(valoreNull);
console.log(typeof valoreNull);

// ARRAY
let colori = ["giallo", "rosso", "verde", "blu"];
//push aggiunge un elemento
colori.push("Arancione");
//sort ordina l'array
colori.sort();
//elimino l'ultimo elemento
colori.pop();
console.log(colori);

for (let i = 0; i < colori.length; i++) {
    console.log(colori[i]);
}

console.log("Foreach");

colori.forEach(colore => {
    console.log(colore);
})

console.log("For Of, per gli array");
for (let colore of colori) {
    console.log(colore);
}

console.log("For in, tipico per oggetti");
for (const colore in colori) {
    console.log(colori[colore]);
}

//If
let miaEta = 18;

if (miaEta <= 18) {
    console.log("Non puoi entrare");
} else if (miaEta >= 18 && miaEta <= 60) {
    console.log("Puoi entrare");
} else {
    console.log("Non puoi entrare, sei oltre i 60 anni");
}

//TRIPLO UGUALE
let num1 = 10;
let num2 = "10";

if (num1 == num2) {
    console.log("I numeri sono uguali");
} else {
    console.log("I numeri sono diversi");
}

if (num1 === num2) {
    console.log("I numeri sono identici");
} else {
    console.log("I numeri sono diversi nel tipo");
}


let num3 = 10;
let num4 = 8;

if (num3 !== num4) {
    console.log("I due numeri sono diversi nel tipo o nel valore");
} else if (num3 != num4) {
    console.log("I due numeri sono diversi solo nel valore");
} else {
    console.log("I due numeri sono uguali ");
}

// console.log(miaNuovaVar);
// esempio, la mia variabile deve obbligatoriamente essere una stringa
let miaNuovaVar = 7;

if (typeof miaNuovaVar != "string") {
    console.log("la variabile non è una stringa");
} else {
    console.log("la variabile è una stringa");
}