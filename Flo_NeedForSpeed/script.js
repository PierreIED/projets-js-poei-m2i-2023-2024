var pos = document.getElementById('voiture').style;
pos.gridColumnStart = '1';
pos.gridColumnEnd = '2';
pos.gridRowStart = '1';
pos.gridRowEnd = '2';

function move (dir){
    switch(dir){
        case 'left' : 
        if (isValid(dir)) {
            pos.gridColumnStart = `${Number(pos.gridColumnStart) - 1}`; 
            pos.gridColumnEnd = `${Number(pos.gridColumnEnd) - 1}`;
        }
        break;

        case 'top' : 
        if (isValid(dir)) {
            pos.gridRowStart = `${Number(pos.gridRowStart) - 1}`; 
            pos.gridRowEnd = `${Number(pos.gridRowEnd) - 1}`; 
        }
        break;

        case 'bot' :
            if (isValid(dir)){
                pos.gridRowStart = `${Number(pos.gridRowStart) + 1}`; 
                pos.gridRowEnd = `${Number(pos.gridRowEnd) + 1}`; 
            }
            break;

        case 'right' :
            if (isValid(dir)){
                pos.gridColumnStart = `${Number(pos.gridColumnStart) + 1}`; 
                pos.gridColumnEnd = `${Number(pos.gridColumnEnd) + 1}`; 
            }
        break;
    }   
}

function isValid(dir){
    switch(dir){
        case 'right' : 
        if ((pos.gridColumnStart < '9') 
        && ((pos.gridRowStart == '1') 
        || (pos.gridRowStart == '5')
        || (pos.gridRowStart == '9'))) {
            return true;
        }
        return false;

        case 'left': 
        if ((pos.gridRowStart == '1') 
        || (pos.gridRowStart == '5')
        || (pos.gridRowStart == '9')) {
            return true;
        }
        return false;

        case 'bot' :
        if ((pos.gridRowStart < '9') 
        && ((pos.gridColumnStart == '1') 
        || (pos.gridColumnStart == '5')
        || (pos.gridColumnStart == '9'))) {
            return true;
        }
        return false;

        case 'top' :
            if ((pos.gridColumnStart == '1') 
            || (pos.gridColumnStart == '5')
            || (pos.gridColumnStart == '9')) {
                return true;
            }
            return false;
    }
}