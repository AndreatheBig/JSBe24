const URL = "https://reqres.in/api/users?page=2";

//Utilizzo fetch API per poter chiamare i dati e ottenerli.
//Applico il metodo GET

let utenti = [];

let elListaUtenti = document.querySelector("#listaUtenti");

fetch(URL)
    .then(data => {
        console.log(data);
        return data.json(); //il metodo json() converte il json in obj
    }
    )
    .then(response => {
        console.log(response);
        //stampo il nome degli utenti
        //data è il nome della proprietà che contiene l'array di oggetti
        utenti = response.data;

        response.data.forEach(user => {
            console.log(user.first_name + " " + user.last_name);

            elListaUtenti.innerHTML += stampaInfoUser(user);
        });

    });


function stampaInfoUser(user) {
    let info = `
    <li> 
        <p>Nome: ${user.first_name} </p>
        <p>Cognome: ${user.last_name} </p>
        <img src = '${user.avatar}'/>
    </li>
    `
    return info;
}

//cONTROprova del fatto che siamo in asincrono
// setTimeout(() => {
//     console.log(utenti);
// }, 2500)