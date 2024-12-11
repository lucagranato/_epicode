const listBox = document.querySelector('#lista')
listBox.style.display = 'none';
const form = document.forms[0];
const formContainer = document.querySelector('.formContainer')
const nameInput = document.forms[0].elements[0];
const list = document.querySelector('ul');

form.addEventListener('submit', function(event){
    event.preventDefault();
    let name = nameInput.value;
    if (name.length > 0){
        let nameInList = document.createElement('li');
        nameInList.textContent = name;
        nameInList.style.cursor = 'pointer'; 
        listBox.style.display = 'block';
        list.appendChild(nameInList);
        console.log(name)
        nameInput.value = ''; 

        nameInList.addEventListener('click', function(event){
            event.preventDefault();
            nameInList.style.textDecoration = 'line-through'; 
            nameInList.style.color = 'ffffff';
        });

    

        let removeButton = document.createElement('button')
        removeButton.innerText = 'X';
        nameInList.appendChild(removeButton)
        removeButton.addEventListener('click', function(){
            nameInList.remove()
            if (list.children.length < 1){
            listBox.style.display = 'none';
            }
        })    
    }else{
        let messageContainer = document.createElement('p');
        messageContainer.innerText = 'Inserisci un testo!';
        messageContainer.style.color = '#000000';
        form.appendChild(messageContainer)
        // if (form.appendChild(messageContainer).length = 1){
            
        // }
    }
});

   
