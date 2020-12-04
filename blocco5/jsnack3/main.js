/*
Crea 10 oggetti che rappresentano una zucchina. 
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine
*/

class Zucchina {
    constructor(varietà, peso, lunghezza) {
        this.varietà = varietà;
        this.peso = peso; //kg
        this.lunghezza = lunghezza; //cm
    }
}
var zucchine = [];

zucchine.push(
    new Zucchina('bianca', .8, 10),
    new Zucchina('verde', .9, 16),
    new Zucchina('tonda', .4, 8),
    new Zucchina('di Faenza', .75, 10),
    new Zucchina('tardiva', 1.2, 20),
    new Zucchina('giant', 2, 40),
    new Zucchina('americana', .6, 12),
    new Zucchina('bianca', .8, 10),
    new Zucchina('stretta', .5, 30),
    new Zucchina('bassa', 1.1, 14)
);

var zucchineLunghe = [];
var zucchineCorte = [];

zucchine.forEach(element => { //ES6
    if (element.lunghezza > 15) {
        zucchineLunghe.push(element);
    } else {
        zucchineCorte.push(element);
    }
});

var pesoLunghe = 0;
var pesoCorte = 0;

zucchineCorte.forEach(function(item) { //ES5
    pesoCorte += item.peso;
});
zucchineLunghe.forEach(function(item) {
    pesoLunghe += item.peso;
});

console.log(`Peso complessivo zucchine lunghe: ${pesoLunghe.toFixed(1)} KG`);
console.log(`Peso complessivo zucchine corte: ${pesoCorte.toFixed(1)} KG`);

