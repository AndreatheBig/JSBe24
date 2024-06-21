function salvaInLS() {
    // let mioNome = "Dario";
    // localStorage.setItem("nomeUser", mioNome);

    let user = {
        nome: "Dario",
        materia: "JAVA",
        voto: 10
    }

    localStorage.setItem("user", JSON.stringify(user));
}

btn = document.querySelector("#btn");

btn.addEventListener("click", salvaInLS);

function recuperaDaLS() {
    // console.log(localStorage.getItem("nomeUser"));
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
}

btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", recuperaDaLS);