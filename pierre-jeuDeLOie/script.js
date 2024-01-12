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
        displayElement(coordGrid, newDiv, i)
    }
    document.getElementById('case4').style.borderColor = 'green'
    document.getElementById('case21').style.borderColor = 'green'
    document.getElementById('case5').style.borderColor = 'red'
    document.getElementById('case22').style.borderColor = 'red'
    return coordGrid
}

var coordGrid = buildGrid()
var REDPOS = 0
var GREENPOS = 0
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
    REDPOS += testColorCase('red', REDPOS)
    resolveDice(red)
    turn = !turn
}

function moveGreen() {
    greenBtn.disabled = true
    redBtn.disabled = false
    GREENPOS += rollDice()
    GREENPOS += testColorCase('green', GREENPOS)
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

function testColorCase(color, pos){
    currentCase = document.getElementById('case'+(pos -1))
    console.log(currentCase)
    console.log(currentCase.style.borderColor)
    if (currentCase.style.borderColor == 'initial') return 0

    if (currentCase.style.borderColor == color) return 2

    return -2
}