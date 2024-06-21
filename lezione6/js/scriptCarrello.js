let listaCarrello = document.querySelector("#listaCarrello");
let grandTotal = document.querySelector("#grandTotal");
let btnDelCarr = document.querySelector("#btnDelCarr");
let btnPaga = document.querySelector("#btnPaga");

function stampaListaCarrello() {
    grandTotal.innerHTML = "";
    let totale = 0;
    //Questa funzione legge nel localStorage
    //prodottiCarrello è un array di Oggetti
    let prodottiCarrello = JSON.parse(localStorage.getItem("prodottiCarr"));

    prodottiCarrello.forEach(prod => {
        listaCarrello.innerHTML += `<li> ${prod.title} - € ${prod.price} </li>`;
        totale += Number(prod.price);
    });

    grandTotal.innerHTML = "Totale: " + totale.toFixed(2) + " €";
}

window.addEventListener("DOMContentLoaded", stampaListaCarrello);

function svuota() {
    localStorage.removeItem("prodottiCarr");
    location.reload();
}

function paga() {
    //Prima controlla i campi poi svuolta il ls
    svuota();
}

btnPaga.addEventListener("click", paga);
btnDelCarr.addEventListener("click", svuota)