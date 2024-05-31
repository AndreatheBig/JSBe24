//Esercizio: Controlla i campi input. Dopo aver controllato registra lo studente il quale verrà mostrato all'interno del div#lastUser e verrà salvato all'interno di un array di studenti. Al click su mostra lista studenti mostrerò la lista, in formato JSON, di tutti gli studenti registrati fino a quel momento.

class Studente{
    constructor(nome, cognome, corso, matricola){
        this.nome = nome;
        this.cognome = cognome;
        this.corso = corso;
        this.matricola = matricola;
    }
}

let studenti = [];

let btnReg = document.querySelector("#btn");
let lastUser = document.querySelector("#lastUser");
let feed = document.querySelector("#feed");
let btnShowStudenti = document.querySelector("#btnShowStudenti");
let classe = document.querySelector("#classe");

function registra() {
    let nome = document.querySelector("#nome").value;
    let cognome = document.querySelector("#cognome").value;
    let corso = document.querySelector("#corso").value;
    let matricola = document.querySelector("#matricola").value;

    feed.innerHTML = "";

    if(nome == "" || cognome == "" || corso == "" || matricola == ""){
        feed.innerHTML = "<strong> I campi devono essere tutti compilati </strong>";
    }else{
        // Creo lo studente, quindi faccio riferimento ad una classe
        let studente = new Studente(nome, cognome, corso, matricola);
        studenti.push(studente);
        stampaLastUser(studente);
        
        let allInput = document.querySelectorAll("#formComp input"); //ottengo una NodeList, cioè un parente molto stretto degli array
        allInput.forEach(input =>{
            input.value = "";
        })
    }
}

/**
 * @param {Studente} studente 
 */
function stampaLastUser(studente){
    lastUser.innerHTML = `
        <p> Nome: ${studente.nome} </p>
        <p> Cognome: ${studente.cognome} </p>
        <p> Corso: ${studente.corso}</p>
        <p> Matricola: ${studente.matricola} </p>
    `;
}
btnReg.addEventListener("click", registra);

//Devo stampare tutti gli studenti in formato JSON
/**
 * Gli studenti sono delle String poiché li traduco in formatoJSON
 * @param {String} studenti 
 */
function mostraStudenti(studenti){
    classe.innerHTML = studenti;
}

//Dovendo passare un parametro a mostra studenti wrappo tutto in una funzione anonima
btnShowStudenti.addEventListener("click", function(){
    //1. trasformo il mio arraydiStudenti in un JSON
    let studentiJSON = JSON.stringify(studenti);

    //2. passo studentiJSON come parametro alla funz mostraStudenti
    mostraStudenti(studentiJSON);

    //3. per poter trattenere il dato, momentaneamente, registro il mio array di studenti JSON all'interno della localStorage
    localStorage.setItem("studenti", studentiJSON);
});

function recuperaDaLS(){
    //ci vuole un if per controllare se esiste qualcosa in ls
    let studentiJSON = localStorage.getItem("studenti");

    console.log(studentiJSON);
}

document.addEventListener("DOMContentLoaded", recuperaDaLS);