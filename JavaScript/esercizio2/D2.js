/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const num1 = 18;
const num2 = 31;

if (num1 > num2){
  console.log('Il numero più grande è', num1)
} else if(num1 < num2){
  console.log('Il numero più grande è', num2)
} else{
  console.log('I due numeri sono uguali')
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

if ((num1 || num2) != 5){
  console.log('not equal')
} else {
  console.log('equal')
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

if ((num1 || num2) % 5 === 0){
  console.log('Divisibile per 5')
  } else {
  console.log('Non è divisibile per 5')
  }

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num3 = 4
let num4 = 12

if ((num3 || num4 !== 8) || (num3 + num4 === 8) || (num3 - num4 === 8)){
  console.log('8')
} else {
  console.log('not 8')
}

// Altra versione

if ((num3 || num4) === 8){
  console.log('Equal, my number is 8')
}else if((num3 + num4) === 8){
  console.log('La somma dei due numeri è 8')
}else if((num3 - num4) === 8){
  console.log('La differenza dei due numeri è 8')
}else{console.log('Il mio numero non è 8 ma neanche la somma o la differenza dei due numeri')
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = [19,30,11];
let totale = totalShoppingCart[0] + totalShoppingCart[1] + totalShoppingCart[2];
let resto = 50 - totale;

if (totale > 50){
  console.log('Ha diritto alla spedizione gratuita! Il totale del carrello è ' + totale + ' euro.'); 
}else if(totale === 50){
  console.log('Aggiungi 1 euro per avere la spedizione gratuita. Il totale del carrello è ' + totale + ' euro.'); 
}else if(totale < 50){
  console.log('Ti manca ' + resto + ' Per avere la spedizione gratuita. Il totale del carrello è ' + totale + ' euro.'); 
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totale2 = (
  (totalShoppingCart[0] - (totalShoppingCart[0] * 20 / 100)) +
  (totalShoppingCart[1] - (totalShoppingCart[1] * 20 / 100)) +
  (totalShoppingCart[2] - (totalShoppingCart[2] * 20 / 100))
);

if(totale2 > 50){
  console.log('Ha diritto alla spedizione gratuita! Il totale del carrello è ' + totale2 + ' euro.'); 
}else if(totale2 === 50){
  console.log('Aggiungi 1 euro per avere la spedizione gratuita. Il totale del carrello è ' + totale2 + ' euro.'); 
}else if(totale2 < 50){
  console.log('Ti manca ' + resto + ' Per avere la spedizione gratuita. Il totale del carrello è ' + totale2 + ' euro.'); 
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let x = 5;
let y = 17;
let z = 33;

let primo, secondo, terzo;

if (x > y && x > z){
  primo = x;
    if (y > z){
      secondo = y;
      terzo = z;
    }else{
      secondo = z;
      terzo = y;
    }
}else if (y > x && y > z){
  primo = y;
    if (z > x){
      secondo = z;
      terzo = x;
    }
}else if (z > x && z > y){
  primo = z;
    if (x>y){
      secondo = x;
      terzo = y; 
    }else{
      secondo = y;
      terzo = x;
    }
}

console.log(primo, secondo, terzo)



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let val = 'Mario';

if (typeof val != 'number'){
  console.log('Il tuo valore non è un numero, ma è una ' + typeof val)
}else{
  console.log('Il tuo valore è un numero' + typeof val)
}

let val1 = 8;
if (typeof val1 !== 'number'){
  console.log('Il tuo valore non è un numero, ma è una ' + typeof val1)
}else{
  console.log('Il tuo valore è un ' + typeof val1)
}

let val2 = 8;
if (typeof val2 !== 'string'){
  console.log('Il tuo valore non è una stringa, ma è un ' + typeof val2)
}else{
  console.log('Il tuo valore è un ' + typeof val2)
}

let val3 = 'ciao';
if (typeof val3 !== 'string'){
  console.log('Il tuo valore non è una stringa, ma è un ' + typeof val3)
}else{
  console.log('Il tuo valore è un ' + typeof val3)
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let m = 19;

if (m % 2 === 0){
  console.log('Il tuo numero ' + m + ' è pari.')
}else{
  console.log('Il tuo numero ' + m + ' è dispari.')
}

let n = 20;

if (n % 2 === 0){
  console.log('Il tuo numero ' + n + ' è pari.')
}else{
  console.log('Il tuo numero ' + n + ' è dispari.')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

 let val4 = 7
  if (val4 < 5) {
      console.log("Meno di 5");
    } else if (val4 < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto';
console.log(me)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const myArr = [];
myArr.push(0,1,2,3,4,5,6,7,8,9,10)
console.log(myArr)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

myArr. splice(10, 1, 100)
console.log(myArr)


myArr.shift()
console.log(myArr)

myArr.unshift(33)
console.log(myArr)

const value = [1,2,3,4,5];
let somma = 0;

// cicli for
 
for (let i=0; i < value.length; i++){
  console.log(somma += value[i])
}

let arr = ['uno', 'due', 'tre'];

arr.push('quattro');
arr.shift()

for (let i = 0; i < arr.length; i++){
  console.log(arr[i])
}


// for in
for (const key in arr) {
  console.log(key)
}

for (const key in arr) {
  console.log(key, arr[key])
}

for (const key in arr) {
  console.log(arr[key] += '!!')
}

// metodi stringhe

let str = 'Ciao a tutti'
console.log(str.indexOf('Ciao'))
console.log(str.indexOf('tutti'))
