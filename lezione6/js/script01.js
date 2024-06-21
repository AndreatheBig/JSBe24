let boxContainer = document.querySelector("#boxContainer");

function prendiProdotti() {
    if (localStorage.length != 0) {
        prodottiPerCarrello = JSON.parse(localStorage.getItem("prodottiCarr"));
    }
    //Dentro questa funzione svolgo la mia fetch
    //ATT: le fetch hanno di default il metodo GET
    let prodotti;

    const url = "https://fakestoreapi.com/products";
    fetch(url)
        .then(rispostaDelServer => {
            return rispostaDelServer.json();
        })

        .then(
            /** 
             * @param {Array} datiVeri 
             */
            datiVeri => {
                //come sono questi dati ? Sto ricevendo un array di oggetti, quindi il parametro datiVeri è un array.
                console.log(datiVeri);
                prodotti = datiVeri;

                for (let i = 0; i < datiVeri.length; i++) {
                    boxContainer.appendChild(creaCard(datiVeri[i]));
                }
            })
}

//Questo array verrà salvato nel localStorage (ATT: il localStorage acquisce solo formato JSON)
let prodottiPerCarrello = [];

function creaCard(prodotto) {
    // let card = `
    // <div class="card">
    //         <img src=${prodotto.image} class="dimImg">
    //         <h3>${prodotto.title}</h3>
    //         <p>${prodotto.price}</p>
    //         <button>Acquista</button>
    // </div>`;

    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `
    <img src=${prodotto.image} class="dimImg">
    <h3>${prodotto.title}</h3>
    <p>${prodotto.price}</p>`;

    let button = document.createElement("button");
    button.addEventListener("click", function () {
        //questa è la funzione che aggiunge al carrello
        prodottiPerCarrello.push(prodotto);
        let prodCarrJSON = JSON.stringify(prodottiPerCarrello);
        localStorage.setItem("prodottiCarr", prodCarrJSON);
    })

    button.innerHTML = "Acquista";

    card.appendChild(button);

    return card;
}

//L'evento DOMContentLoaded scatta al momento del caricamento della pagina
window.addEventListener("DOMContentLoaded", prendiProdotti);