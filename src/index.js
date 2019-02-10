//funcion boton para cifrar y mostrar mensaje
function btnCifrar() {
    let string = document.getElementById("text").value;
    let offset = Number(document.getElementById("numero").value);
    let cifrarMsj = window.cipher.encode(string, offset);
    document.getElementById("messageEncode").innerHTML = cifrarMsj;

}

//llamar boton para cifrar
document.getElementById("buttonEncode").addEventListener("click", btnCifrar);


//funcion boton para descifrar y mostrar mensaje
function btnDescifrar() {
    let string = document.getElementById("text").value;
    let offset = Number(document.getElementById("numero").value);
    let descifrarMsj = window.cipher.decode(string, offset);
    document.getElementById("messageDecode").innerHTML = descifrarMsj;
}

//llamar boton para descifrar
document.getElementById("buttonDecode").addEventListener("click", btnDescifrar);


//funcion para ocultar pantalla 1 y mostrar pantalla 2
function displayHelp() {
    document.getElementById("pantalla-2").style.display = "block";
    document.getElementById("pantalla-1").style.display = "none";

}
//llamar boton ayuda
document.getElementById("buttonHelp").addEventListener("click", displayHelp);


//funcion para ocultar pantalla 2 y mostrar pantalla 1
function displayVolver() {
    document.getElementById("pantalla-1").style.display = "block";
    document.getElementById("pantalla-2").style.display = "none";
}
//llamar boton de volver instrucciones
document.getElementById("buttonVolver").addEventListener("click", displayVolver);

//funcion para limpiar el formulario
function clean() {
    location.reload();
}

document.getElementById("btnClean").addEventListener("click", clean);