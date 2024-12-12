let griglia = document.querySelector('.gridContainer')
let cells = []
let button = document.querySelector('button')
let estratti = []
let griglia2 = document.querySelector('.gridContainer2')


function generateGrid(){
    // genera la griglia e assegna i numeri fissi
    let griglia = document.querySelector('.gridContainer')
    for (let i=1; i<=76; i++){
        let cell = document.createElement('div')
        cell.classList.add('cell');
        cell.innerText = i;
        griglia.appendChild(cell)

        cells.push(cell)
    }

}
generateGrid()


function generaCartella(){
    let myNumbers = []
    let griglia2 = document.querySelector('.gridContainer2')

        while (myNumbers.length < 24) {
            let randomNumber = Math.floor(Math.random() * 76) + 1;
            if (!myNumbers.includes(randomNumber)) {
                myNumbers.push(randomNumber);
            }
        }

        // Aggiungi i numeri alla griglia
        myNumbers.forEach((number) => {
            let cell2 = document.createElement('div'); // Crea una nuova cella per ogni numero
            cell2.classList.add('cell');
            cell2.innerText = number; // Imposta il numero della cella
            griglia2.appendChild(cell2); // Aggiungi la cella al contenitore
    });
   }
generaCartella()




button.addEventListener('click', function generateRandomNumbers(){
    //estraggo un numero casuale
       let randomNumber;
       do{randomNumber = Math.floor(Math.random()*76)+1
       }while(estratti.includes(randomNumber));
       estratti.push(randomNumber)

       console.log(randomNumber)
       console.log(estratti)
    

    // seleziono la cella corrispettiva
       cells.forEach(function(cell){
        if (parseInt(cell.innerText) === randomNumber){
            cell.style.backgroundColor = 'rgb(255, 255, 255)'
            cell.style.color = 'rgb(0, 0, 136)'
            }
        })
       

        // seleziono nella cartella
        let cartellaCells = griglia2.querySelectorAll('.cell');
        cartellaCells.forEach(function (cell) {
            if (parseInt(cell.innerText) === randomNumber) {
                cell.style.backgroundColor = 'rgb(255, 255, 255)';
                cell.style.color = 'rgb(0, 0, 136)';
            }
        });

        // visualizzo il numero estratto
        let numberDisplay = document.querySelector('h2')
        numberDisplay.innerText = `Numero estratto: ${randomNumber}`; // Aggiorna il contenuto di numberDisplay
    })

