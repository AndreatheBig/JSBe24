
//Sintassi CSS
//#valore ==> ID di un elemento html
//.valore ==> Class di un elemento

let formReg = document.querySelector("#formReg");
let demo = document.querySelector("#demo");


function validate(event) {
    //Pulisce il div demo
    demo.innerHTML = "";

    //Pulisco i bordi dei campi input
    //ATT: quando utilizzo il querySelectorAll salvo tutto in una nodelist
    let inputsColorati = document.querySelectorAll("input.borderRed");
    inputsColorati.forEach(inputColorato => {
        // inputColorato.removeAttribute("class");
        inputColorato.classList.remove("borderRed");
    })

    console.log(inputsColorati);

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
    } else {
        localStorage.setItem("nomeUser", nome);
    }
}

function validateCognome(cognome, event) {
    if (cognome == "" || cognome.length <= 2) {
        demo.innerHTML += "<p> Hai dimenticato il cognome </p>";
        document.querySelector("#cognome").setAttribute("class", "borderRed");
        event.preventDefault();
        event.stopImmediatePropagation();
    } else {
        localStorage.setItem("cognomeUser", cognome);
    }
}

function validateEta(eta, event) {
    console.log(typeof eta);
    if (eta < 18) {
        demo.innerHTML += "Mi spiace, non puoi entrare, non sei abbastanza adulto";
        document.querySelector("#eta").setAttribute("class", "borderRed");
        event.preventDefault();
        event.stopImmediatePropagation();
    } else {
        localStorage.setItem("etaUser", eta)
    }
}

function validateEmail(email, event) {
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/;
    if (!email.match(regexEmail)) {
        demo.innerHTML += "<p> La tua mail non é valida</p>";
        document.querySelector("#email").setAttribute("class", "borderRed");
        event.preventDefault();
        event.stopImmediatePropagation();
    } else {
        localStorage.setItem("emailUser", email);
    }
}

function validatePassword(password, event) {
    let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!password.match(regexPass)) {
        demo.innerHTML += "<p> La tua password non è valida </p>";
        document.querySelector("#password").setAttribute("class", "borderRed");
        event.preventDefault();
        event.stopImmediatePropagation();
    } else {
        localStorage.setItem("passwordUser", password);
    }
}


formReg.addEventListener("submit", validate);

//Adesso voglio recuperare direttamente i campi input
let elNome = document.querySelector("#nome");
let elCognome = document.querySelector("#cognome");
let elEta = document.querySelector("#eta");
let elEmail = document.querySelector("#email");
let elPass = document.querySelector("#password");

elNome.addEventListener("blur", function () {
    validateName(this.value, event);
});
elCognome.addEventListener("blur", function () {
    validateCognome(this.value, event);
});
elEta.addEventListener("blur", function () {
    validateEta(this.value, event);
});
elPass.addEventListener("blur", function () {
    validatePassword(this.value, event);
});
elEmail.addEventListener("blur", function () {
    validateEmail(this.value, event);
});

