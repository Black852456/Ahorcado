class dibujo {

    constructor() {
        var pantalla = document.querySelector("canvas");
        this.pincel = pantalla.getContext("2d");
        this.pincel.fillStyle = "transparent";
        this.pincel.fillRect(0, 0, 500, 350);
        this.pincel.lineCap = "round";
        this.pincel.strokeStyle = "#0A3871";
        this.pincel.lineWidth = 2;
    }

    //Piso
    dibujarPiso() {
            this.pincel.moveTo(90, 130);
            this.pincel.lineTo(220, 130);
            this.dibujoConfirmacion();
        }
        //Barra
    dibujarBarra() {
            this.pincel.moveTo(120, 130);
            this.pincel.lineTo(120, 20);
            this.dibujoConfirmacion();
        }
        //Lateral
    dibujarLateral() {
            this.pincel.moveTo(120, 20);
            this.pincel.lineTo(180, 20);
            this.dibujoConfirmacion();
        }
        //Cuerda
    dibujarCuerda() {
            this.pincel.moveTo(180, 20);
            this.pincel.lineTo(180, 43);
            this.dibujoConfirmacion();
        }
        //cabeza
    dibujarCabeza() {
            this.pincel.arc(180, 53, 10, -1.5, 2 * Math.PI);
            this.dibujoConfirmacion();
        }
        //Tronco
    dibujarTronco() {
            this.pincel.moveTo(180, 63);
            this.pincel.lineTo(180, 93);
            this.dibujoConfirmacion();
        }
        //Brazo Derecho
    dibujarBrazoDerecho() {
            this.pincel.moveTo(180, 68);
            this.pincel.lineTo(170, 83);
            this.dibujoConfirmacion();
        }
        //Brazo Izquierdo
    dibujarBrazoIzquierdo() {
            this.pincel.moveTo(180, 68);
            this.pincel.lineTo(190, 83);
            this.dibujoConfirmacion();
        }
        //Pierna Derecha
    dibujarPiernaDerecha() {
            this.pincel.moveTo(180, 93);
            this.pincel.lineTo(170, 110);
            this.dibujoConfirmacion();
        }
        //Pierna Izquierda
    dibujarPiernaIzquierda() {
        this.pincel.moveTo(180, 93);
        this.pincel.lineTo(190, 110);
        this.dibujoConfirmacion();
    }

    dibujoConfirmacion() {
        this.pincel.stroke();
    }


}