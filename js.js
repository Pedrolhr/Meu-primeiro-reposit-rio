var aleatorio = Math.floor(Math.random() * 100);
function Verificar(aleatorio){

    var chute = parseInt(document.getElementById("chute").value);

    var result = document.getElementById("result");

    if (chute === aleatorio) {
        result.innerText = "Número correto";
        result.style.setProperty("background-color", "green");

    } else if (chute > aleatorio){
        result.innerText = "Número muito grande";
        result.style.setProperty("background-color", "blue");
    } else if (chute < aleatorio){
        result.innerText = "Número muito pequeno";
        result.style.setProperty("background-color", "red");
    }
    console.log({aleatorio, chute});
}