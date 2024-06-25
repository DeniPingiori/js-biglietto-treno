//verifica collegamento file
alert('test');

// stringa che chieda all'utente quanti km vuole percorrere
let number_km = prompt ('inserisci km da percorrere');
console.log(number_km);
//prezzo 
let prezzo = 0.21 * Number(number_km);
console.log(prezzo);

//stringa che chiede all'utente quanti anni ha
let eta = Number(prompt ('inserisci la tua età'));
console.log(eta);

//calcolare lo sconto 
let price = 0;
let ticket_price= 0.21; 

//se user ha - di 18 anni
if (eta<18) {
    price = (ticket_price - ((ticket_price / 100) * 20));
    document.getElementById('result').innerHTML = 'hai diritto allo sconto del 20%' ;
}

//se user ha + di 65 anni
else if (eta>65) {
    //calcolare sconto
    //prezzo= prezo-sconto;
    price = (ticket_price - ((ticket_price / 100) * 40));
    document.getElementById('result').innerHTML = 'hai diritto allo sconto del 40%' ;
}

//se user ha + di 18 anni e meno di 65 anni
else  {
    document.getElementById('result').innerHTML = 'non hai diritto allo sconto' ;
}

//prezzo totale biglietto sapendo che 0.21€/km
let final_price = ticket_price;

if (eta < 18 || eta > 65) {
    final_price = (ticket_price-price);
}

else {
    final_price = ticket_price;
}