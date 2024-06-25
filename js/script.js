//verifica collegamento file
alert('test');

// stringa che chieda all'utente quanti km vuole percorrere
let number_km = prompt ('inserisci km da percorrere');
console.log(number_km);

//stringa che chiede all'utente quanti anni ha
let eta = prompt ('inserisci la tua età');
console.log(eta);

//se user ha - di 18 anni
if (eta<18) {
    document.getElementById('result').innerHTML = 'hai diritto allo sconto del 20%' ;
}

//se user ha + di 65 anni
else if (eta>65){
    document.getElementById('result').innerHTML = 'hai diritto allo sconto del 40%' ;
}

//se user ha + di 18 anni e meno di 65 anni
else if (eta>18<65) {
    document.getElementById('result').innerHTML = 'non hai diritto allo sconto' ;
}

//prezzo totale biglietto sapendo che 0.21€/km
