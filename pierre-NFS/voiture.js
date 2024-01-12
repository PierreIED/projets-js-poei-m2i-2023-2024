var coordCar = [1, 1]

const available = (coord) => ([1, 5, 9].find(elt => elt == coord) != undefined)

function testMoveCar(axe, op) {
    if (!available(coordCar[(axe + 1) % 2]))
        return
    coordCar[axe] += eval(op + "1")
    if (coordCar[axe] < 1 || coordCar[axe] > 9) {
        coordCar[axe] -= eval(op + "1")
    }
    else {
        moveCar()
    }
}

function moveCar() {
    let myCar = document.getElementById('voiture')
    myCar.style.gridColumnStart = coordCar[0]
    myCar.style.gridColumnEnd = coordCar[0] + 1
    myCar.style.gridRowStart = coordCar[1]
    myCar.style.gridRowEnd = coordCar[1] + 1
}