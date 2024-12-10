
/* ESERCIZIO 1
 Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/

/// Cambio il titolo dell'head

// let nuovoTitolo = 'Benvenuto nella mia pagina!'

// const changeTitle = function cambiaTitolo(nuovoTitolo) {
//     document.title = nuovoTitolo
//     console.log('Titolo cambiato in:', nuovoTitolo)
// }

// changeTitle(nuovoTitolo)

let nuovoTitolo = 'Benvenuto nella mia pagina!'

const changeTitle = function (){
    const h1 = document.querySelector('div h1');
    h1.innerText = nuovoTitolo;
    console.log('Titolo aggiornato a: ', nuovoTitolo)
}

changeTitle(nuovoTitolo)


/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/
let titleClass = 'myHeading'

const addClassToTitle = function () {
    const h1 = document.querySelector('div h1');
    h1.classList.add(titleClass)

    console.log('Classe aggiunta al titolo: ', titleClass)
}

addClassToTitle(titleClass)

/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p figli di un div
*/

let newParagraph = 'lorem ipsuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuum';

const changePcontent = function () {
    const p = document.querySelectorAll('div p');
    p.innerText = newParagraph

    console.log('Il contenuto del paragrafo è stato cambiato a: ', newParagraph)
}

changePcontent(newParagraph)

/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

let linkText = 'Questo link adesso porta a Google'
let link = 'https://www.google.com'

const changeUrls = function () {
    const a = document.querySelector('main a');
    a.innerText = linkText;
    a.href = link;

    console.log('Tutti i link, tranne quelli del footer, sono stati aggiornati a: ', link)
}

changeUrls(link)


/* 
const changeUrls = function () {
    let links = document.querySelectorAll('a:not(footer a)');
    links.forEarch( ele => {
        ele.href = 'https://www.google.com'
        })
}

changeUrls()
/*

/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

newListItem = '4th';

const addToTheSecond = function () {

    const secondList = document.querySelectorAll('ul')[1]; /// queryselectorall mi permette con il [1] di accedere alla seconda lista, contando da 0.
    const newLi = document.createElement('li');
    newLi.innerText = newListItem;
    secondList.appendChild(newLi);

    console.log('Ho aggiunto un nuovo elemento alla seconda lista!')
}

addToTheSecond(newListItem)

/* 
const addToTheSecond = function () {

    const ul = document.querySelectorAll('#secondList');
    let newLi = document.createElement('li');
    let  newLi.innerText = 'nuovo contenuto lista';
    ul.appendChild(newLi)
}

addToTheSecond(newLi)

/*

/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo al primo div
*/


const addParagraph = function () {
    let pElements = document.querySelectorAll('div p');
    let newParagraph = 'wowowowowo'
    pElements.forEach(p => {
        p.innerText = newParagraph
    })
}

addParagraph();

/* 

const addParagraph = function () {
    let allDiv = document.querySelectorAll('div')
    let div = allDiv[0]                                         // let div = document.body.firstElementChild
    let paragraph = document.createElement('p')
    paragraph.innerText = 'Nuovo contenuto paragrafo'
    div.appendChild(paragraph)
}
    addParagraph()

/*

/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
    let firstList = document.querySelector('#firstList') ///queryselector non ha bisogno di [0] perche seleziona solo il primo, mentre QSAll li seleziona tutti per cui va specificato
    firstList.style.display = 'none';
}

hideFirstUl()

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {
    unorderedLists = document.querySelectorAll('ul');
    unorderedLists.forEach(ele => {
        ele.style.backgroundColor = 'green';
    })
}

paintItGreen()

/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

const makeItClickable = function () {
    let h1 = document.querySelector('h1');
    console.dir(h1)
    h1.onclick = function(){
        h1.innerText = h1.innerText.slice(0, -1)
    }
}

makeItClickable()

/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

const revealFooterLink = function () {
    let footer = document.querySelector('footer')
    footer.style.cursor = 'pointer';
    footer.onclick = function() {
        let link = document.querySelector('footer a')
        let txt = link.href
        alert(txt) /// o anche alert(document.querySelector('footer a')) e basta
    }

}

revealFooterLink()

/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

let arrObj = [{
    img: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQqgIxwJ2WQ7Lakca2aSPIiYiqq7i_RHB5mvGqWg-bzDbGO1Z_DQeKL5iorXn9QrAkwLc1iJBxS33dhRFjfvIk',
    nome: 'Test',
    quantita: 3,
    prezzo: 25,
}]

// const generateTable = function () {
//    let div = document.querySelector('#tableArea')
//    let table = document.createElement('table')
// //    table.innerHTML = `
// //     <tr>
// //         <th>immagine</th>
// //         <th>nome prodotto</th>
// //         <th>quantità</th>
// //         <th>prezzo</th>
// //     </tr>
// //     <tr>
// //         <td></td>
// //         <td></td>
// //         <td></td>
// //         <td></td>
// //     </tr>
// //    `
//    for(let i=0; i<5; i++){
//     let tr = document.createElement('tr')
//     let td = document.createElement('td')
//     td.innerHTML = '<img src="'+ arrObj[i].img +'"></img>'
//     table.appendChild(tr)
//     tr.appendChild(td)
//    } 
//    div.appendChild(table)
// }

// generateTable()

/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function () {}

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () {}

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/


const changeColorWithRandom = function () {
    let h2 = document.querySelector('#changeMyColor')

    const getRandomColor = function(){
            return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    };

    h2.onclick = function(){
        h2.style.cursor = 'pointer';
        let randomColor = getRandomColor();
            h2.style.color = randomColor;
    }
}

changeColorWithRandom()
