var voiture = document.querySelector('#voiture')
var positionColumnStart = 1;
var positionColumnEnd = 2;
var positionRowStart = 1;
var positionRowEnd = 2;

function moveRight() {
    if (positionColumnStart < 9 && isAvailableRow() ) {
        positionColumnStart++;
        positionColumnEnd++;
        updateColumnRow();
    }
}
function moveTop() {
    if (positionRowStart > 1 && positionRowStart <= 9 && isAvailableColumn()) {
        positionRowStart--;
        positionRowEnd--;
        updateGridRow();
    }
}
function moveBottom() {
    if (positionRowStart < 9 && isAvailableColumn()) {
        positionRowStart++;
        positionRowEnd++;
        updateGridRow();
    }
}
function moveLeft() {
    if (positionColumnStart > 1  && positionColumnStart <= 9 && isAvailableRow()) {
        positionColumnStart--;
        positionColumnEnd--;
        updateColumnRow();
    }
}
function updateGridRow() {
    voiture.style.gridRowStart = positionRowStart;
    voiture.style.gridRowEnd = positionRowEnd;
}
function updateColumnRow() {
    voiture.style.gridColumnStart = positionColumnStart;
    voiture.style.gridColumnEnd = positionColumnEnd;
}
function isAvailableRow() {
    if(positionRowStart == 1 || positionRowStart == 5 || positionRowStart == 9) { 
        return true; 
    }
}
function isAvailableColumn() {
    if(positionColumnStart == 1 || positionColumnStart == 5 || positionColumnStart == 9) { 
        return true; 
    }
}
