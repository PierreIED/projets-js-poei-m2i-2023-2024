var dropperAndDraggables = [...document.querySelectorAll('div > div:nth-child(n)')];
var draggables = document.querySelectorAll('div[draggable=true]');
var dropper = document.getElementById('dropper');

dropper.addEventListener('dragover', setDropperDragOver);
dropper.addEventListener('drop', swapDropperDragger);

for (const drag of draggables) {
    drag.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', drag.id);
    })
};

function setDropperDragOver(event) {
    event.preventDefault();
};

function swapDropperDragger(event) {
    const data = event.dataTransfer.getData('text/plain');
    var dragger = document.querySelector(`div[id=${data}]`);
    var indiceDragger = dropperAndDraggables.findIndex((elt) => elt.id == `${data}`);
    var indiceDropper = dropperAndDraggables.findIndex((elt) => elt.id == 'dropper');
    if (indiceDropper % 3 == 0 && indiceDragger-indiceDropper == 1) {
        dropper.innerHTML = `${data.charAt(4)}`;
        dropper.style.color = 'white';
        dropper.style.backgroundColor = 'red';
        dragger.innerHTML = '';
        dragger.style.backgroundColor = 'white';
        dropper.removeEventListener('dragover', setDropperDragOver);
        dropper.id = data;
        dragger.id = 'dropper';
        dropper = document.getElementById('dropper');
        dragger = document.querySelector(`div[id=${data}]`);
        dropper.setAttribute('draggable', 'false');
        dragger.setAttribute('draggable', 'true');
        dropper.addEventListener('dragover', setDropperDragOver);
        dragger.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', dragger.id);
        });
        dropper.addEventListener('drop', swapDropperDragger);
        dropperAndDraggables = [...document.querySelectorAll('div > div:nth-child(n)')];
    } else if (indiceDropper % 3 == 2 && indiceDragger-indiceDropper == -1) {
        dropper.innerHTML = `${data.charAt(4)}`;
        dropper.style.color = 'white';
        dropper.style.backgroundColor = 'red';
        dragger.innerHTML = '';
        dragger.style.backgroundColor = 'white';
        dropper.removeEventListener('dragover', setDropperDragOver);
        dropper.id = data;
        dragger.id = 'dropper';
        dropper = document.getElementById('dropper');
        dragger = document.querySelector(`div[id=${data}]`);
        dropper.setAttribute('draggable', 'false');
        dragger.setAttribute('draggable', 'true');
        dropper.addEventListener('dragover', setDropperDragOver);
        dragger.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', dragger.id);
        });
        dropper.addEventListener('drop', swapDropperDragger);
        dropperAndDraggables = [...document.querySelectorAll('div > div:nth-child(n)')];
    } else if (indiceDropper % 3 == 1 && Math.abs(indiceDragger-indiceDropper) == 1 || Math.abs(indiceDragger-indiceDropper) == 3) {
        dropper.innerHTML = `${data.charAt(4)}`;
        dropper.style.color = 'white';
        dropper.style.backgroundColor = 'red';
        dragger.innerHTML = '';
        dragger.style.backgroundColor = 'white';
        dropper.removeEventListener('dragover', setDropperDragOver);
        dropper.id = data;
        dragger.id = 'dropper';
        dropper = document.getElementById('dropper');
        dragger = document.querySelector(`div[id=${data}]`);
        dropper.setAttribute('draggable', 'false');
        dragger.setAttribute('draggable', 'true');
        dropper.addEventListener('dragover', setDropperDragOver);
        dragger.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', dragger.id);
        });
        dropper.addEventListener('drop', swapDropperDragger);
        dropperAndDraggables = [...document.querySelectorAll('div > div:nth-child(n)')];
    }
};