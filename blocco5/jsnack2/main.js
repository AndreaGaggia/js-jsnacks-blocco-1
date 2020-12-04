/*
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/

function reverseWord(stringa) {
    var reverse_word = "";
    for (var i = stringa.length - 1; i >= 0; i--) {
        reverse_word += stringa[i];
    };
    return reverse_word;
};
var parola = prompt('inserisci una parola');
alert('la tua parola al contrario:\n' + reverseWord(parola));