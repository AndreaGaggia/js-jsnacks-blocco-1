/*
Crea 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. 
Calcola quanto pesano tutte le zucchine.
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
    new Zucchina('verde', .9, 15),
    new Zucchina('tonda', .4, 8),
    new Zucchina('di Faenza', .75, 10),
    new Zucchina('tardiva', 1.2, 20),
    new Zucchina('giant', 2, 40),
    new Zucchina('americana', .6, 12),
    new Zucchina('bianca', .8, 10),
    new Zucchina('stretta', .5, 30),
    new Zucchina('bassa', 1.1, 15)
);

var pesoTot = 0;
zucchine.forEach(element => {
    pesoTot += element.peso;
});

console.log(pesoTot.toFixed(2) + " KG");
