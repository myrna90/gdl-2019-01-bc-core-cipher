//prende y apaga pantallas
function reinicio() {
    document.getElementById("pantalla-2").style.display = "none";
    document.getElementById("pantalla-3").style.display = "none";
};

reinicio();

//Funcion para "cambiar" de ventanas
function display(div1, div2) {
    let divElement = document.getElementById(div1);
    let divElement2 = document.getElementById(div2);

    //Ocultando la division del inicio
    if (divElement.style.display == 'none') {
        divElement.style.display = 'block';
    } else {
        divElement.style.display = 'none';
    }

    //Mostrando la division del menu
    if (divElement2.style.display == 'none') {
        divElement2.style.display = 'block';
    } else {
        divElement2.style.display = 'none';
    }
};

let string = ""
let number = ""

document.getElementById("buttonCode").addEventListener("click", code);

function code() {
    choosed = "buttonCode"
    display("pantalla-3")
};

document.getElementById("buttonDecode").addEventListener("click", deCode);

function deCode() {
    choosed = "buttonDecode"
    display("pantalla-3")
};

document.getElementById("buttonHelp").addEventListener("click", help);

function help() {
    choosed = "buttonHelp"
    display("pantalla-2")
};