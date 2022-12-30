// Button bar on the top
const buttonContainer = document.createElement('div');
document.body.appendChild(buttonContainer);
buttonContainer.style.border = '5px solid grey';
buttonContainer.style.height = '100px';
buttonContainer.style.width = '800px';
buttonContainer.style.display = 'flex';
buttonContainer.style.alignItems = 'center';
buttonContainer.style.justifyContent = 'center';

// Grid container
const gridContainer = document.createElement('div');
document.body.appendChild(gridContainer);
gridContainer.setAttribute('class', 'image');
gridContainer.style.border = '5px solid gold';
gridContainer.style.backgroundColor = 'antiquewhite';
gridContainer.style.display = 'flex';
gridContainer.style.width = '800px';
gridContainer.style.height = '800px';
gridContainer.style.flexDirection = 'column';

let howLarge = 0;
makeGrid();
function makeGrid(){
    while(true){
        howLarge = prompt('How large the grid? (Max 40)');
        if (howLarge <= 40){
            break;
        } else {continue;}
    }
}

// Single square
const singleSquare = document.createElement('div');
singleSquare.setAttribute('class', 'notTouched');
singleSquare.style.width = `${(800 / howLarge)}px`;
singleSquare.style.height = `${(800 / howLarge)}px`;

// No idea why the margin appears
const singleRow = document.createElement('div');
singleRow.style.marginBottom = '-4px';

// Nested loop that builds the grid
for (let i = 0; i < howLarge; i++){
    let rowClone = singleRow.cloneNode();
    gridContainer.appendChild(rowClone);
    for (let i = 0; i< howLarge; i++){
    let squareClone = singleSquare.cloneNode();
    rowClone.appendChild(squareClone);
    }
}

// Adds hover color switch
const allSquares = document.querySelectorAll('.notTouched');
allSquares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.setAttribute('class', 'touched');
    })
})

// Reset button
const button = document.createElement('button');
buttonContainer.appendChild(button);
button.classList.add('button');
button.textContent = 'Reset';
button.addEventListener('click', () => {
        makeGrid();
        const allSquares = document.querySelectorAll('.touched');
        allSquares.forEach((square) => {
            square.setAttribute('class', 'notTouched');
        });
});
