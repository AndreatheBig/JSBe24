//Dato che esistono più pagine in reqres, al primo click sul pulsante mostrerò la pagina 1, al secondo click verranno aggiunti, ai primi utenti, quelli della pagina 2
const URL = "https://reqres.in/api/users?page=1";


let utenti = [];

let elListaUtenti = document.querySelector("#listaUtenti");
let btn = document.querySelector("#btn");
btn.addEventListener("click", mostraUtenti);

function mostraUtenti() {

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

}

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

