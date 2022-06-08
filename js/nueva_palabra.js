var objeto = document.querySelector(".nueva_palabra");

var contenido_texto_objeto = document.querySelector("textarea");

//var mensaje = document.querySelector(".Mensaje");
var caracteresespeciales = document.querySelector(".caracteresespeciales");
var vaciolimite = document.querySelector(".vacio");
var limite = document.querySelector(".limite");
var numero = document.querySelector(".numero");
var bandera = false;


function validacion(contenido) {
    var expresion = /[a-zA-ZÑñ]$/
    return expresion.test(contenido);
}

function invisible(objetoContenido) {
    objetoContenido.classList.remove("visible");
    objetoContenido.classList.add("invisible");
}

function visible(objetoContenido) {
    objetoContenido.classList.remove("invisible");
    objetoContenido.classList.add("visible");
}

contenido_texto_objeto.addEventListener("input", function(e) {
    //console.log(contenido_texto_objeto.value);
    if (validacion(contenido_texto_objeto.value)) {
        console.log("Valido");

        sessionStorage.setItem("nuevapalabra", contenido_texto_objeto.value);
        bandera = true;
        numero.textContent = contenido_texto_objeto.value.length;
    } else {
        console.log("NO");
        if (contenido_texto_objeto.value.length == 0) {
            invisible(caracteresespeciales);
            invisible(limite);
            visible(vaciolimite);
        } else if (contenido_texto_objeto.value.length >= 15) {
            console.log("LIMITE");
            invisible(caracteresespeciales);
            visible(limite);
            invisible(vaciolimite);
        } else {
            visible(caracteresespeciales);
            invisible(limite);
            invisible(vaciolimite);
            contenido_texto_objeto.value = contenido_texto_objeto.value.substring(0, contenido_texto_objeto.value.length - 1);
        }
        //visible(caracteresespeciales);
    }



});

objeto.addEventListener("click", function() {
    //alert("Funciona");
    if (bandera) {
        window.location = "iniciarjuego.html";
    }
});