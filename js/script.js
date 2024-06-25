//verifica collegamento file
alert('test');

// stringa che chieda all'utente quanti km vuole percorrere
let number_km = prompt ('inserisci km da percorrere');
console.log(number_km);

//stringa che chiede all'utente quanti anni ha
let eta = prompt ('inserisci la tua età');
console.log(eta);

if (eta<18) {
    document.getElementById('result').innerHTML = 'hai diritto allo sconto del 20%' ;
}

else (eta>65){
    document.getElementById('result').innerHTML = 'hai diritto allo sconto del 40%' ;
}