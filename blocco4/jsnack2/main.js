/*
Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
Stampare a schermo la bici con peso minore.
*/

var biciDaCorsa = [
    {
        nome: 'biciBlu',
        peso: 45
    },
    {
        nome: 'biciRossa',
        peso: 78
    },
    {
        nome: 'biciNera',
        peso: 39
    },
    {
        nome: 'biciBianca',
        peso: 48
    },
];

var biciOrdinate = biciDaCorsa.sort(function(a, b) {
    return a.peso - b.peso; //ordine ascendente per peso
});

console.log(biciOrdinate[0]);

