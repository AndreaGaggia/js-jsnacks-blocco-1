/*
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
*/


var arrayScemo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

console.log(portionOfArray(arrayScemo, 2, 10));


function portionOfArray(arr, a, b) {
    var arrPortion = [];
    for (var i = a; i <= b; i++) {
        arrPortion.push(arr[i]);
    }
    return arrPortion;
}