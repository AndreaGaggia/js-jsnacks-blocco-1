/*
array di oggetti squadra con 3 proprietà di cui 2 settate a 0. In seguito assegna numeri casuali a queste proprietà
*/

var squadre = [
    {
        nome: 'juve',
        punti: 0,
        falli: 0
    },
    {
        nome: 'milan',
        punti: 0,
        falli: 0
    },
    {
        nome: 'napoli',
        punti: 0,
        falli: 0
    },
    {
        nome: 'sassuolo',
        punti: 0,
        falli: 0
    },
    {
        nome: 'roma',
        punti: 0,
        falli: 0
    },
];

squadre.forEach(function(item) {
    item.punti = randomInt(1, 10);
    item.falli = randomInt(1, 20);
});

console.log(squadre);


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
}