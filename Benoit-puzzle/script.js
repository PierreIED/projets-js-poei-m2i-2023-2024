var draggable = document.querySelector("#drag1")
var dropper = document.querySelector("#dropper")


console.log(draggable.id);
dropper.addEventListener('dragover', (event) => {
    event.preventDefault()
})

draggable.addEventListener('drag', (event) => {
    event.dataTransfer.setData('text/id', draggable.innerHTML)
})

dropper.addEventListener('drop', (event) => {
    const data = event.dataTransfer.getData('text/id')
    dropper.innerHTML = draggable.innerHTML
    dropper.style.backgroundColor = 'red'
    dropper.id = 'drag1'
    draggable.id = 'dropper'
    draggable.style.backgroundColor = 'white'
    draggable.innerHTML = ''
})