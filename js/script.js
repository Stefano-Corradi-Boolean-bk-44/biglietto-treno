/**     
 * 
 * Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
BONUS
1. controllare la validità dei dati inseriti
2. fare inserire il codice di sconto “SCONTO20”: se l’utente ha 20 anni o meno aggiunge il 20% di sconto altrimenti niente e generare l’output “Codice non valido per la tua fascia di età“. Se inserisce il codice sbagliato comunicare “Codice non valido”

1. chiedere età e km
2. calcolo prezzo
3. calcolo coupon
    - inserimento codice corretto, età <= 20
    - codice corretto, età > 20
    - codice non corretto
    - codice non inserito
4. output
 * 
*/

const el = document.getElementById('output');
console.log(el);

const age = parseInt(prompt('Inserire l\'età'));
const km =  parseInt(prompt('Inserire i km'));
const coupon = prompt('Inserisci il tuo coupon (facoltativo)'); 

const priceKm = 0.21;

let validData = true;
let errorMsg = '';
let couponMsg = '';

// CONTROLLO VALIDITA' DATI
if(age < 1 || age > 120){
  validData = false;
  errorMsg = "Inseire una età valida";
}
if(isNaN(age)){
  validData = false;
  errorMsg = "Il campo età deve essere un numero";
}
if(isNaN(km)){
  validData = false;
  errorMsg = "Il campo km deve essere un numero";
}
if(km <= 0){
  validData = false;
  errorMsg = "Inseire una chilometraggio corretto";
}

if(validData){ // i dati sono validi
    // CALCOLO PREZZO
  let price = km * priceKm;

  if(age < 18){
    price -= price * 0.2;
  } else if(age > 64){
    price -= price * 0.4;
  }

  //calcolo coupon
  if(coupon === "SCONTO20" && age < 21){
    price -= price * 0.2;
    couponMsg = 'Codice di sconto valido, hai avuto uno sconto ulteriore del 20%';
  } else if(coupon === "SCONTO20" && age > 20){
    couponMsg = 'Codice non adatto alla tua fascia di età';
  } else if(coupon && coupon !== "SCONTO20"){
    couponMsg = 'Codice non corretto';
  }

  // stampo il prezzo
  document.getElementById('prezzo').innerHTML = price.toFixed(2);
  document.getElementById('couponMsg').innerHTML = couponMsg;

}else{  // non è vero che i dati sono validi
  // stampo l'errore
  document.getElementById('output').innerHTML = errorMsg;

}



