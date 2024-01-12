var voiture = document.getElementById('voiture');
var positionInterdites = [];
var deltamove = 10;

DefinePositionContainer()
DefinePositionPark()

function moveLeft(){
    var bounds = voiture.getBoundingClientRect();
    if(IsPositionAvaible(bounds.left-deltamove, (bounds.top+bounds.bottom)/2)){
        voiture.style.left = bounds.left - deltamove + 'px';
    }
}
function moveTop(){
    var bounds = voiture.getBoundingClientRect();
    if(IsPositionAvaible((bounds.left+bounds.right)/2, bounds.top - deltamove)){
        voiture.style.top = bounds.top - deltamove  + 'px';
    }
}
function moveBottom(){
    var bounds = voiture.getBoundingClientRect();
    if(IsPositionAvaible((bounds.left+bounds.right)/2, bounds.bottom + deltamove)){
        voiture.style.top = bounds.top + deltamove  + 'px';
    }
}

function moveRight(){
    var bounds = voiture.getBoundingClientRect();
    if(IsPositionAvaible(bounds.right + deltamove, (bounds.top+bounds.bottom)/2)){
        voiture.style.left = bounds.left + deltamove + 'px';
    }
}



function DefinePositionContainer(){
    var container = document.querySelector('.container'); 
    var bounds = container.getBoundingClientRect();
    positionInterdites[0] = [[bounds.left,bounds.right],[bounds.top,bounds.bottom]];
    
    voiture.style.left = bounds.left;
    voiture.style.top = bounds.top;
}

function DefinePositionPark(){
    for (let i = 1; i <= 4; i++) {
        var park = document.querySelector('.park'+i); 
        var bounds = park.getBoundingClientRect();
        positionInterdites[i] = [[bounds.left,bounds.right],[bounds.top,bounds.bottom]];
        
    }  
}

function IsPositionAvaible(x,y){
    console.log("x : "+ x)
    console.log("y : "+ y)
    //container
    var bool = true
    if((x < positionInterdites[0][0][0] || x > positionInterdites[0][0][1]) || (y < positionInterdites[0][1][0] || y > positionInterdites[0][1][1]) ){
        bool = false;
    }
    //parking
    else {
        for (let i = 1; i < 5; i++) {  
            if((x > positionInterdites[i][0][0] && x < positionInterdites[i][0][1]) && (y > positionInterdites[i][1][0] && y < positionInterdites[i][1][1]) )
            {
                bool =  false;
            }
        } 
    }
    return bool;   
}

/*pour test
console.log("x min container : " + positionInterdites[0][0][0])
console.log("x max container : " + positionInterdites[0][0][1])
console.log("y min container : " + positionInterdites[0][1][0])
console.log("y max container : " + positionInterdites[0][1][1])

// console.log("x min park"+i+" : " + positionInterdites[i][0][0])
// console.log("x max park"+i+" : " + positionInterdites[i][0][1])
// console.log("y min park"+i+" : " + positionInterdites[i][1][0])
// console.log("y max park"+i+" : " + positionInterdites[i][1][1])

*/