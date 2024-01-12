// construction de la grille de coordonnées
function buildGrid() {
    let coordGrid = []
    for (let i = 2; i < 11; i++) {
        coordGrid.push([i, 1])
    }
    for (let i = 2; i < 9; i++) {
        coordGrid.push([10, i])
    }
    for (let i = 9; i > 1; i--) {
        coordGrid.push([i, 8])
    }
    for (let i = 7; i > 2; i--) {
        coordGrid.push([2, i])
    }

    for (let i = 3; i < 9; i++) {
        coordGrid.push([i, 3])
    }
    for (let i = 4; i < 7; i++) {
        coordGrid.push([8, i])
    }

    for (let i = 7; i > 3; i--) {
        coordGrid.push([i, 6])
    }
    for (let i = 0; i < coordGrid.length; i++) {
        let newDiv = document.createElement('div')
        newDiv.id = "case" + i
        document.querySelector('#container').appendChild(newDiv)
        newDiv.style.border = "solid"
        newDiv.style.zIndex = -1
        newDiv.style.gridColumStart = coordGrid[i][0]
        newDiv.style.gridColumnEnd = coordGrid[i][0] + 1
        newDiv.style.gridRowStart = coordGrid[i][1]
        newDiv.style.gridRowEnd = coordGrid[i][1] + 1
    }
    return coordGrid
}

var coordGrid = buildGrid()
var REDPOS = 0
var GREENPOS = 0
console.log(coordGrid)

var startBtn = document.querySelector('#divButStart')
var redBtn = document.querySelector('#divButRouge')
var greenBtn = document.querySelector('#divButVert')

function initialize(){

    startBtn.addEventListener('click', start)
    redBtn.addEventListener('click', moveRed)
    greenBtn.addEventListener('click', moveGreen)
}
