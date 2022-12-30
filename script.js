// Button bar on the top
const buttonContainer = document.createElement('div');
document.body.appendChild(buttonContainer);
buttonContainer.style.border = '5px solid grey';
buttonContainer.style.height = '100px';
buttonContainer.style.width = '800px';

// Grid container
const gridContainer = document.createElement('div');
document.body.appendChild(gridContainer);
gridContainer.style.border = '5px solid gold';
gridContainer.style.backgroundColor = 'antiquewhite';
gridContainer.style.display = 'flex';
gridContainer.style.width = '800px';
gridContainer.style.height = '800px';


let howLarge = prompt('How large the grid?');

// Single square
const singleSquare = document.createElement('div');
singleSquare.style.boxSizing = 'border-box';
singleSquare.style.border = '1px solid blue';
singleSquare.style.width = `${(800 / howLarge)}px`;
singleSquare.style.height = `${(800 / howLarge)}px`;
singleSquare.style.display = 'inline-block';

const squareRowHolder = document.createElement('div');
squareRowHolder.style.marginTop = '0px';
squareRowHolder.style.marginBottom = '0px';

for (let i = 0; i < howLarge; i++){
    let rowClone = squareRowHolder.cloneNode();
    gridContainer.appendChild(rowClone);
    for (let i = 0; i< howLarge; i++){
    let squareClone = singleSquare.cloneNode();
    rowClone.appendChild(squareClone);
    }
}
