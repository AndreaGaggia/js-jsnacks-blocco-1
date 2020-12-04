/*
Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

var dischi = ['Animals', 'DIE', 'Anima Latina', 'Antics'];
var autori = ['Pink Floyd', 'Iosonouncane', 'Lucio Battisti', 'Interpol'];

var discoAutore = mixedArray(dischi, autori);
console.log(discoAutore);

function mixedArray(arr1, arr2) {
    var mixed = [];
    for (var i = 0; i < arr1.length; i++) {
        mixed.push(arr1[i], arr2[i]);
    }
    return mixed;
}
