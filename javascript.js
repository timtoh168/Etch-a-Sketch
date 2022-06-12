//creates button at top of screen
let size=16;
let grid=genGrid(10);

const container = document.createElement("div");
container.classList.add("container")
const button = document.createElement("button");
button.textContent = "Change Grid Size";
button.classList.add("button");

function getSize() {
    let input=prompt("What size grid to create?","16");
    while(input>100) {
        input = prompt("Must be smaller than 100","16");
    }
    return input;
}

//creates an n by n grid
function genGrid(size) {
    var grid = document.createElement("div"); 
    grid.classList.add("grid");
    for(let i = 0; i < size; i++){ 
        var row = document.createElement("div"); 
        row.classList.add("row");
        for(let j = 0; j < size; j++){ 
            var cell = document.createElement("div"); 
            cell.classList.add("cell");
            cell.innerText = "";//(i * size) + j;
            row.appendChild(cell); 
        } 
        grid.appendChild(row); 
    }
    enableHover(grid);
    return grid;
}

function setRainbowBG(cell) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    cell.style.backgroundColor = "#" + randomColor;
}

function shadeDarker(cell) {
    if (!cell.dataset.shade) {
        cell.setAttribute('data-shade', '1');
      } else {
        // if the grid item has been shadded, increment the data-shade value
        // this keeps track of how many times the grid item has been shaded
        let shadeAmount = parseInt(cell.getAttribute('data-shade'));
        shadeAmount++;
        cell.setAttribute('data-shade', `${shadeAmount}`);
      }
}

//appending child to document
container.appendChild(button);
container.appendChild(grid);
document.body.appendChild(container);

//create a hover event listener for each cell
function enableHover(grid) {
    const cells = grid.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
        console.log(cell.style.backgroundColor.value);
        //setRainbowBG(cell);
        cell.classList.add("hovered");
    });
});
}

//button to change grid size
button.addEventListener("click", ()=> {
    container.removeChild(grid)
    size = getSize();
    grid=genGrid(size);
    enableHover(grid);
    container.appendChild(grid);
})


