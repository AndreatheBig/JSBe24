class Utente {
    constructor(nome, cognome, eta, email, password) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.eta = eta;
        this.password = password;
    }
}

//Compongo lo user
function creaUser() {
    let utente;
    if (localStorage.length != 0) {
        utente = new Utente(
            localStorage.getItem("nomeUser"),
            localStorage.getItem("cognomeUser"),
            localStorage.getItem("etaUser"),
            localStorage.getItem("emailUser"),
            localStorage.getItem("passwordUser")
        )

        stampaUtene(utente);
    } else {
        console.log("Non c'é nessun utente registrato");
    }
}


let dettaglioUtente = document.querySelector("#dettaglioUtente");

/**
 * 
 * @param {Utente} utente 
 */
function stampaUtene(utente) {
    dettaglioUtente.innerHTML = `<p>${utente.nome} ${utente.cognome}</p>
    <p>${utente.email}</p>
    <p>${utente.eta}</p>
    <p>password:*********</p>
    `;
}


window.addEventListener("DOMContentLoaded", creaUser)

let btn = document.querySelector("#btn");

function logout() {
    localStorage.clear();
}
btn.addEventListener("click", logout);
