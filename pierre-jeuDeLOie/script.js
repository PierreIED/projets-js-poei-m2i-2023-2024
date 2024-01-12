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
        if (i in [4, 21]) {
            newDiv.classList.add('greenCase')
            console.log(newDiv)
        }
        else if (i in [5, 22]) {
            newDiv.classList.add('redCase')
        }
        else if (i in [10, 26, 35]) {
            newDiv.classList.add('blackCaseS')
        }
        newDiv.id = "case" + i
        document.querySelector('#container').appendChild(newDiv)
        newDiv.style.border = "solid"
        newDiv.style.zIndex = -1
        displayElement(coordGrid, newDiv, i)
    }
    return coordGrid
}

var coordGrid = buildGrid()
var REDPOS = 0
var GREENPOS = 0
console.log(coordGrid)
var turn = true

var startBtn = document.querySelector('#butStart')
var redBtn = document.querySelector('#butRouge')
var greenBtn = document.querySelector('#butVert')

var green = document.querySelector('#vert')
var red = document.querySelector('#rouge')

initialize()
function initialize() {
    startBtn.addEventListener('click', start)
    redBtn.addEventListener('click', moveRed)
    greenBtn.addEventListener('click', moveGreen)
}

function start() {
    redBtn.disabled = false
    startBtn.diasbled = false
}

function moveRed() {
    redBtn.disabled = true
    greenBtn.disabled = false
    REDPOS += rollDice()
    resolveDice(red)
    turn = !turn
}

function moveGreen() {
    greenBtn.disabled = true
    redBtn.disabled = false
    GREENPOS += rollDice()
    resolveDice(green)
    turn = !turn
}

function rollDice() {
    dice = Math.floor(Math.random() * 6) + 1
    document.querySelectorAll('#number>div')
        .forEach(elt => elt.style.display = 'none')
    let currentDice = document.getElementById(dice)
    document.getElementById(dice).style.display = 'flex'
    return dice
}

function resolveDice(color) {
    let pos = turn ? REDPOS : GREENPOS
    if (pos > coordGrid.length) {
        alert(color.id + " a gagné")
        //resetGame()
    }
    else {
        displayElement(coordGrid, color, pos - 1)
    }
}

function displayElement(coordGrid, elt, pos) {
    elt.style.gridColumnStart = coordGrid[pos][0]
    elt.style.gridColumnEnd = coordGrid[pos][0] + 1
    elt.style.gridRowStart = coordGrid[pos][1]
    elt.style.gridRowEnd = coordGrid[pos][1] + 1
}