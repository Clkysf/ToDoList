let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let clearToDo = document.getElementById('clearToDo');

addToDoButton.addEventListener('click', function() {
    let paragraf = document.createElement('p');
    paragraf.classList.add('paragraf-styling');
    toDoContainer.appendChild(paragraf);
    paragraf.innerHTML = inputText.value;
    inputText.value = '';
    paragraf.addEventListener('click', function() {
        paragraf.style.textDecoration = 'line-through';
    })
    paragraf.addEventListener('dblclick', function() {
      toDoContainer.removeChild(paragraf);
    })

    clearToDo.addEventListener('click', function() {
        paragraf.style.display = 'none';
    })

})
