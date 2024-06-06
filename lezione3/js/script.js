class Utente {
    constructor(nome, cognome, eta, email, password, termCond) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.eta = eta;
        this.password = password;
        this.termCond = termCond;
    }
}
//Sintassi CSS
//#valore ==> ID di un elemento html
//.valore ==> Class di un elemento


let formReg = document.querySelector("#formReg");
let demo = document.querySelector("#demo");

function validate(event) {
    demo.innerHTML = "";

    //Qui raccolgo tutti i valori dei campi input
    let nome = String(document.querySelector("#nome").value);
    let cognome = document.querySelector("#cognome").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let termCond = document.querySelector("#termCond");
    let eta = Number(document.querySelector("#eta").value);

    validateName(nome, event);
    validateCognome(cognome, event);
    validateEta(eta, event);
    validateEmail(email, event);
    validatePassword(password, event);

    if (!termCond.checked) {
        demo.innerHTML += "<p> Non hai spuntato termini e condizioni </p>";
        event.preventDefault();
    }

}

function validateName(nome, event) {
    if (nome == "" || nome.length <= 2) {
        demo.innerHTML += "<p> Hai dimenticato il nome </p>";
        document.querySelector("#nome").setAttribute("class", "borderRed");
        console.log(event);
        event.preventDefault();
        event.stopImmediatePropagation();
    }
}

function validateCognome(cognome, event) {
    if (cognome == "" || cognome.length <= 2) {
        demo.innerHTML += "<p> Hai dimenticato il cognome </p>";
        document.querySelector("#cognome").setAttribute("class", "borderRed");
        event.preventDefault();
        event.stopImmediatePropagation();
    }
}

function validateEta(eta, event) {
    console.log(typeof eta);
    if (eta < 18) {
        demo.innerHTML += "Mi spiace, non puoi entrare, non sei abbastanza adulto";
        document.querySelector("#eta").setAttribute("class", "borderRed");
        event.preventDefault();
        event.stopImmediatePropagation();
    }
}

function validateEmail(email, event) {
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/;
    if (!email.match(regexEmail)) {
        demo.innerHTML += "<p> La tua mail non é valida</p>";
        document.querySelector("#email").setAttribute("class", "borderRed");
        event.preventDefault();
        event.stopImmediatePropagation();
    }
}

function validatePassword(password, event) {
    let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!password.match(regexPass)) {
        demo.innerHTML += "<p> La tua password non è valida </p>";
        document.querySelector("#password").setAttribute("class", "borderRed");
        event.preventDefault();
        event.stopImmediatePropagation();
    }
}


formReg.addEventListener("submit", validate);