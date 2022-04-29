// When size is submitted by the user, call makeGrid()
let formSubmit = document.querySelector('#sizePicker');
formSubmit.addEventListener('submit',
event => {
    makeGrid();
    event.preventDefault();
});

/**
* @description Create a N_by_M editable grid of squares using inputs
*              entered by the user in the UI interface
* @returns an editable grid where each of them can change background color 
*/

function makeGrid() {

// Select color input
let color = document.querySelector('#colorPicker');
color.addEventListener('change', event => color.setAttribute('value', event.target.value));

// Select size input
let height = document.querySelector('#inputHeight').value;
let width =  document.querySelector('#inputWidth').value;

//Select the table canvas
let table = document.querySelector('#pixelCanvas');
table.innerHTML = ''; //Each time we click on submit the content is cleared

//Create the table rows and columns using the retrieved inputs
for (let row = 0; row < height; row++) {
    let newRow = document.createElement('tr');
    
    for (let column = 0; column < width; column++){
        let newColumn = document.createElement('td');
        newRow.appendChild(newColumn);
    }
    table.appendChild(newRow);
}

//Select all the td elements and addEventListener to those items
let tdList = document.querySelectorAll('td');
tdList.forEach(element => element.addEventListener('mouseover', (event) => {
    event.target.style.background = color.value;
}));
}
