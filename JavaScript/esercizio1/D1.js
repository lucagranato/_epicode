/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

// ESERCIZIO 1

console.log('Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.')

let stringa = 'testo';
let numero = 1;
let numeroDecimale = 3.14 
let boolean = true;
let vuoto = null;

console.log(stringa, numero, numeroDecimale, boolean, vuoto);

// ESERCIZIO 2

 console.log('Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.');

let myName = 'Luca';
  console.log(myName); 

// ESERCIZIO 3

console.log('Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.');

let a = 4;
let b = 6;
  console.log(a + b);

// ESERCIZIO 4
 console.log('Crea una variable di nome "x" e assegna ad essa il numero 12.');

let x = 12;
  console.log(x);

// ESERCIZIO 5
  console.log('Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.')
  console.log('Dimostra l &#39; impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.');

myName = 'Granato';
// const myName = Luca;
  console.log(myName);

// ESERCIZIO 6
  console.log('Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).');

  console.log(4 - x);

// ESERCIZIO 7
 console.log('Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).');
 console.log('Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).');
 console.log('EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).');

let name1 = 'john';
let name2 = 'John';
  console.log(name1 != name2);

name2 = 'john';
console.log(name1 != name2);

name2 = 'john';
console.log(name1 == name2);

// o anche
console.log(name1 == name2.toLowerCase());


// Esercizi personali
const hello = 'Hello ';
let nome = 'Luca';
  console.log(hello + nome);

let p = '15';
let l = '13';
console.log(p === l);

if (p >= l) 
{console.log('Yes')
} else {console.log('Not')
};

if (p != l)
{console.log('not same')}
else {console.log('same')}


function isDispari(num){
  let risultato = num % 2;
  if (risultato == 0) {
    return false;
  } else if (risultato == 1){
    return true;
  }else{
    alert('Non è un numero intero');
  return "";
  }
}

console.log(isDispari(2));

