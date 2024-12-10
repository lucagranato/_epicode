/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2){
    return l1 * l1
}

console.log(area(8, 7))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(p1, p2){
    if (!Number.isInteger(p1) || !Number.isInteger(p2)) {
        return "Errore: entrambi i parametri devono essere numeri interi.";
      }
    if(p1 === p2){
        return p1 * 3;
    }else{
    return p1 + p2
    }
}

console.log(crazySum(8, 7))
console.log(crazySum(9, 9))
console.log(crazySum(9.9, 9.1))


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(p3, p4){
    if (p3 > 19){
    return Math.abs(p3 - p4)
    }else{
    return Math.abs(p3 - p4)
    }    
}

console.log(crazyDiff(3, 19))


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    if (!Number.isInteger(n)) {
        return 'Il parametro deve essere un numero intero.';
    }      
        if(n > 20 && n <= 100 || n === 400){
            return true
        }else{
            return false
        }
}

console.log(boundary(11))
console.log(boundary(400))
console.log(boundary(20))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str){
    if (typeof str !== 'string'){
        return 'il parametro deve essere una stringa.'
    }
    if (str.startsWith('EPICODE')){
        return str; 
    }else{
        return 'EPICODE' + str
    }

}

console.log(epify(' IS GREAT'))
console.log(epify('EPICODE IS GREAT'))



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n){
    if (n > 0){
        if (n % 3 === 0 || n % 7 === 0){
            return true
        }
    }else{
        return 'Il numero deve essere positivo.'
    }
}

console.log(check3and7(0))
console.log(check3and7(33))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str){
    return str.split('').reverse().join('')
}

console.log(reverseString('EPICODE'))
console.log(reverseString('ciao'))


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(str){
   let arrStr = str.split('');
   let stringaCompleta = []
   for (let i=0; i<arrStr.length; i++){
    let parola = arrStr[i];
    let firstLetter = parola.charAt(0).toUpperCase();
    let parolaSenzaLaPrimaLettera = parola.slice(1);
    let parolaFinale = firstLetter + parolaSenzaLaPrimaLettera
    stringaCompleta.push(parolaFinale)
   }
   return stringaCompleta.join('')
}

console.log(upperFirst('ciao belli'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */