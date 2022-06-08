var cuerpo = document.querySelector("body");
var palabranueva = sessionStorage.getItem('nuevapalabra');
var contenedorpalabra = document.querySelector(".contenedor-palabra");
var letrasmalas = document.querySelector(".letrasmalas");
var objetoClaseDibujo = new dibujo();
var contador_intentos = 0;
var bandera_perdida = false;
var letras_Digitadas = [];
var sumador_letras_correctas = 0;



var listadoPalabras = [
    "Manzana",
    "Pera",
    "Limon",
    "Guanabana",
    "Coco",
    "Mandarina",
    "Naranja",
    "Guayaba",
    "Durazno",
    "Cereza"
];

function validacion(contenido) {
    var expresion = /[a-zA-ZÑñ]$/
    return expresion.test(contenido);
}

function solicitarPalabra() {
    listadoPalabras.push(palabranueva);
    return listadoPalabras[Math.floor(Math.random() * listadoPalabras.length)];

    //console.log(Math.floor(Math.random() * 10));
}

var palabrasolicitada = solicitarPalabra().toUpperCase();

console.log(palabrasolicitada);

function creacionDiv() {
    let div = document.createElement("div");
    div.classList.add("letra");
    return div;
}

function ponerguiones() {
    for (var i = 0; i < palabrasolicitada.length; i++) {
        //contenedorpalabra.appendChild('<div class="letra"></div>');
        contenedorpalabra.appendChild(creacionDiv());
    }
}

function busquedaLetrasIndices(letra, palabra) {
    var listadopocisiones = [];
    for (var i = 0; i < palabra.length; i++) {
        if (palabra[i].toUpperCase() == letra.toUpperCase()) {
            listadopocisiones.push(i);
        }
    }
    return listadopocisiones;
}

ponerguiones();

cuerpo.addEventListener("keyup", function(e) {
    //console.log(e.key);
    //solicitarPalabra();
    //console.log(solicitarPalabra());
    console.log(e.key.toUpperCase());
    if (!bandera_perdida) {
        if (validacion(e.key.toUpperCase())) {
            console.log("VALIDO");
            var posicionesletras = busquedaLetrasIndices(e.key, palabrasolicitada);
            if (posicionesletras.length != 0) {
                if (!revisar_si_la_letra_esta_vector(letras_Digitadas, e.key)) {
                    letras_Digitadas.push(e.key.toUpperCase());
                    console.log(contenedorpalabra.childNodes);
                    //contenedorpalabra.childNodes[1].textContent = e.key.toUpperCase();
                    for (var j = 0; j < posicionesletras.length; j++) {
                        contenedorpalabra.childNodes[posicionesletras[j] + 1].textContent = e.key.toUpperCase();
                        sumador_letras_correctas++;
                    }

                    if (sumador_letras_correctas == palabrasolicitada.length) {
                        alert("Gano");
                    }
                }

            } else if (e.key.length == 1) {
                //console.log("LETRA INCORRECTA");
                console.log(letras_Digitadas);

                if (!revisar_si_la_letra_esta_vector(letras_Digitadas, e.key)) {
                    letras_Digitadas.push(e.key.toUpperCase());
                    letrasmalas.append(creacionDiv().textContent = e.key.toUpperCase());
                    contador_intentos++;
                    opcionesDibujo(contador_intentos);
                    if (contador_intentos >= 10) {
                        bandera_perdida = true;
                    }
                }


            } else {
                console.log("LETRA COMANDO");
            }
        } else {
            console.log("NO VALIDO");
        }
    } else {
        if (e.key.length == 1 && validacion(e.key.toUpperCase())) {
            alert("Perdida Hecha");
        }

    }
});

function medirLongitudLetras(vector) {
    if (vector.length > 0) {
        return true;
    }
    return false;
}


function revisar_si_la_letra_esta_vector(vector, letra) {
    for (var k = 0; k < vector.length; k++) {
        if (vector[k] == letra.toUpperCase()) {
            return true;
        }
    }
    return false;
}

function opcionesDibujo(numero) {

    switch (numero) {
        case 1:
            objetoClaseDibujo.dibujarPiso();
            break;
        case 2:
            objetoClaseDibujo.dibujarBarra();
            break;
        case 3:
            objetoClaseDibujo.dibujarLateral();
            break;
        case 4:
            objetoClaseDibujo.dibujarCuerda();
            break;
        case 5:
            objetoClaseDibujo.dibujarCabeza();
            break;
        case 6:
            objetoClaseDibujo.dibujarTronco();
            break;
        case 7:
            objetoClaseDibujo.dibujarBrazoDerecho();
            break;
        case 8:
            objetoClaseDibujo.dibujarBrazoIzquierdo();
            break;
        case 9:
            objetoClaseDibujo.dibujarPiernaDerecha();
            break;
        case 10:
            objetoClaseDibujo.dibujarPiernaIzquierda();
            break;
    }
}