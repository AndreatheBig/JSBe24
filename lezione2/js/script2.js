let btnReg = document.querySelector("#btn");

function registra() {
    let nome = document.querySelector("#nome").value;

    console.log(nome);
}

btnReg.addEventListener("click", registra);

//Esercizio: Controlla i campi input. Dopo aver controllato registra lo studente il quale verrà mostrato all'interno del div#lastUser e verrà salvato all'interno di un array di studenti. Al click su mostra lista studenti mostrerò la lista, in formato JSON, di tutti gli studenti registrati fino a quel momento.
