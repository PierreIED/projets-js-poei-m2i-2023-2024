document.getElementById('voiture').style.gridColumnStart = '1'; 
document.getElementById('voiture').style.gridColumnEnd = '2';
document.getElementById('voiture').style.gridRowStart = '1';
document.getElementById('voiture').style.gridRowEnd= '2';

function move (dir){
    switch(dir){
        case 'left' : 
        if (isValid(dir)) {
            document.getElementById('voiture').style.gridColumnStart = `${Number(document.getElementById('voiture').style.gridColumnStart) - 1}`; 
            document.getElementById('voiture').style.gridColumnEnd = `${Number(document.getElementById('voiture').style.gridColumnEnd) - 1}`;
        }
        break;

        case 'top' : 
        if (isValid(dir)) {
            document.getElementById('voiture').style.gridRowStart = `${Number(document.getElementById('voiture').style.gridRowStart) - 1}`; 
            document.getElementById('voiture').style.gridRowEnd = `${Number(document.getElementById('voiture').style.gridRowEnd) - 1}`; 
        }
        break;

        case 'bot' :
            if (isValid(dir)){
                document.getElementById('voiture').style.gridRowStart = `${Number(document.getElementById('voiture').style.gridRowStart) + 1}`; 
                document.getElementById('voiture').style.gridRowEnd = `${Number(document.getElementById('voiture').style.gridRowEnd) + 1}`; 
            }
            break;

        case 'right' :
            if (isValid(dir)){
                document.getElementById('voiture').style.gridColumnStart = `${Number(document.getElementById('voiture').style.gridColumnStart) + 1}`; 
                document.getElementById('voiture').style.gridColumnEnd = `${Number(document.getElementById('voiture').style.gridColumnEnd) + 1}`; 
            }
        break;
    }   
}

function isValid(dir){
    switch(dir){
        case 'right' : 
        if ((document.getElementById('voiture').style.gridColumnStart < '9') 
        && ((document.getElementById('voiture').style.gridRowStart == '1') 
        || (document.getElementById('voiture').style.gridRowStart == '5')
        || (document.getElementById('voiture').style.gridRowStart == '9'))) {
            return true;
        }
        return false;

        case 'left': 
        if ((document.getElementById('voiture').style.gridRowStart == '1') 
        || (document.getElementById('voiture').style.gridRowStart == '5')
        || (document.getElementById('voiture').style.gridRowStart == '9')) {
            return true;
        }
        return false;

        case 'bot' :
        if ((document.getElementById('voiture').style.gridRowStart < '9') 
        && ((document.getElementById('voiture').style.gridColumnStart == '1') 
        || (document.getElementById('voiture').style.gridColumnStart == '5')
        || (document.getElementById('voiture').style.gridColumnStart == '9'))) {
            return true;
        }
        return false;

        case 'top' :
            if ((document.getElementById('voiture').style.gridColumnStart == '1') 
            || (document.getElementById('voiture').style.gridColumnStart == '5')
            || (document.getElementById('voiture').style.gridColumnStart == '9')) {
                return true;
            }
            return false;
    }
}