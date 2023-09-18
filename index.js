const grid = document.querySelector("#grid-container");
const button = document.querySelector("#change-grid");
button.addEventListener("click", () => {changeSize()})

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}

function createDivs(divSize){
    const div = document.createElement("div");
    div.classList.add("grid-square");
    div.style.width = `${divSize}px`;
    div.style.height = `${divSize}px`;
    div.addEventListener("mouseover", (e) => e.target.style.backgroundColor = getRandomColor());
    return div;
}


function makeGrid(size = 16){
    for (let i = 0; i < size*size; i++){
        grid.appendChild(createDivs(480/size))
    }
}

function clearGrid(size){
    while(grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
    makeGrid(size)
}

function changeSize(){
    let size = parseInt(prompt("Grid Size (max 100):"));
    if (size < 1 || size > 100){alert("Entry must be 1 < x < 100!"); return}
    clearGrid(size);
}

makeGrid();




// ***alternative function for makeGrid
// function makeGrid(size = 16){
//     for (let i = 0; i < size; i++){
//         for (let j = 0; j < size; j++){
//             grid.appendChild(createDivs(480/size))
//         }
//     }
// }