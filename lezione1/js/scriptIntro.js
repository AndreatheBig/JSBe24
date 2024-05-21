//Dichiaro la funzione
function miaFunzione() {
    console.log("Ciao Dario, come stai ? ");
    let eta = 35;
    console.log("So che hai " + eta + " anni");
}



document.getElementById("btn").addEventListener("click", function () {
    miaFunzione();
    console.log("L'utente sta cliccando in questo esatto punto della pagina:");
    console.log(event.pageX);
    console.log(event.pageY);
});
