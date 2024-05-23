//NOTAZIONE LETTERALE
let studente = {
    //prop 
    nome: "Dario",
    cognome: "Mennillo",
    eta: 35,
    presenza: true,
    //metodo
    salutaDocente: function () {
        return "Ciao Mauro !!";
    }
}

//accedere alle prop e metodi con la notazione . 
console.log(studente.nome);
console.log(studente.cognome);
console.log(studente.eta);
console.log(studente.presenza);
console.log(studente.salutaDocente());

//accedere con [string]
console.log(studente["nome"]);
console.log(studente["cognome"]);
console.log(studente["eta"]);
console.log(studente["presenza"]);
console.log(studente["salutaDocente"]);

console.log("ATTENZIONE, INCREDIBILE: stampo un oggetto con un for");
function stampaInfo(persona) {
    //la key rappresenta la prop dell'oggetto formato stringa
    for (const key in persona) {
        if (typeof persona[key] != "function") {
            console.log(persona[key]);
        }
    }
}

//Per i posteri
// stampaInfo(studente);
// console.log(studente);
// let studenteFormatoJSON = JSON.stringify(studente)
// console.log(JSON.stringify(studente));

// let studenteJavaScript = JSON.parse(studenteFormatoJSON);
// console.log(studenteJavaScript.nome);
// for (const key in studenteJavaScript) {

//     const element = studenteJavaScript[key];
//     console.log(element);

// }
