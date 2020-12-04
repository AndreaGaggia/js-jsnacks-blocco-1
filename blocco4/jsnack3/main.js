/*
    Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
    Calcolare perimetro e area.
    (ripassiamo il Teorema di Pitagora ;D)
    */

class TriangoloRettangolo {
    constructor(base, altezza) {
        this.base = base;
        this.altezza = altezza;
    }

    get area() {
        return (this.base * this.altezza) / 2;
    }

    get ipotenusa() {
        return Math.sqrt(Math.pow(this.altezza, 2) + Math.pow(this.base, 2));
    }

    get perimetro() {
        return this.base + this.altezza + this.ipotenusa;
    }
}

var triangoloEsercizio = new TriangoloRettangolo(10, 20);

console.log(triangoloEsercizio.area, triangoloEsercizio.perimetro);