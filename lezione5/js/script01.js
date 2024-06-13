class Utente {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}


let elListaUtenti = document.querySelector("#elListaUtenti");
let btnInvia = document.querySelector("#btnInvia");

const URLEndpoint = "https://6668148df53957909ff66d2e.mockapi.io/api/utenti";

function salvaUtente() {

    let userName = document.querySelector("#nomeUser").value;
    let lastName = document.querySelector("#cognomeUser").value;

    if (userName == "" || lastName == "") {
        event.preventDefault();
    } else {
        //eseguo una fetch con metodo POST andando a registrare un nuovo utente
        let utente = new Utente(userName, lastName);

        fetch(URLEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(utente)
        })
            .then(data => {
                return data.json();
            })
            .then(() => {
                location.reload();
            })

    }
}

btnInvia.addEventListener("click", salvaUtente);

function recuperaDati() {
    fetch(URLEndpoint)
        .then(data => {
            return data.json();
        })
        .then(response => {
            console.log(response);
            //response è un array di oggetti
            response.forEach(user => {
                // elListaUtenti.innerHTML += `<li> ${user.name} ${user.lastName} ID: ${user.id} </li>`;
                elListaUtenti.appendChild(stampaUser(user));
            });
        })
}

function eliminaUserById(id) {
    console.log("Sto eliminando " + id);
    let URLDel = URLEndpoint + "/" + id;

    fetch(URLDel, {
        method: "DELETE"
    })
        .then(data => {
            return data.json();
        })
        .then(userEliminato => {
            console.log("Hai eliminato ", userEliminato);
            location.reload();
        })
        .catch(error => {
            console.log(error);
        })
}

function stampaUser(user) {
    let rigaUser = document.createElement("li"); //<li></li>
    rigaUser.innerHTML = `${user.name} ${user.lastName} <button>MOdifica</modifica>`; //<li> Nome Cognome </li>

    let btnElimina = document.createElement("button");
    btnElimina.innerHTML = " X ";

    btnElimina.addEventListener("click", function () {
        eliminaUserById(user.id);
    })

    rigaUser.appendChild(btnElimina); //<li> Nome Cognome <button> X </button> </li>

    return rigaUser;
}

window.addEventListener("DOMContentLoaded", recuperaDati);
