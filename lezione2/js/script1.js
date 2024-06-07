class Utente {
    constructor(username, email, dataNascita) {
        this.username = username;
        this.email = email;
        this.dataNascita = dataNascita;
    }
}


// # è il simbolo dell' id
//querySelector recupera un solo elemento
let mioForm = document.querySelector("#mioForm");

let demo = document.querySelector("#demo");

//Creo la funzione di validazione. Questa determinerà se il form può essere inviato oppure no

function validate() {
    //qui dentro controllerò tutti i campi
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let dataNascita = document.querySelector("#dataNascita").value;

    if (username == "" || email == "" || dataNascita == "") {
        //uso il metodo preventDefault affinchè il form non venga lanciato
        event.preventDefault();
        demo.innerHTML = "Caro utente, vedi che hai dimenticato qualcosa!";
    } else {
        //Creo un oggetto Utente per poi poterlo inviare
        // let utente = {
        //     username: username,
        //     email: email,
        //     dataNascita: dataNascita
        // }

        let utente = new Utente(username, email, dataNascita);
        console.log(utente);
        registraUtente(utente);
    }
}

/**
 * @param {Utente} utente 
 */
function registraUtente(utente) {
    let utenteJSON = JSON.stringify(utente);
    //Questo utente verrà inviato presso una EndPoint costruita in Spring, PHP, Ruby
    console.log(utenteJSON);
}

//L'evento sul quale verrà lanciata la funzione validate è il submit del form
//ATT: la funzione sull'eventListener deve essere richiamata senza le parentesi tonde
mioForm.addEventListener("submit", validate);