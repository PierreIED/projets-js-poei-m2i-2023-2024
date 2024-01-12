var caseList = document.getElementsByClassName('case'),
    startBtn = document.querySelector('#divButStart'),
    greenBtn = document.querySelector('#butVert'),
    redBtn = document.querySelector('#butRouge'),
    playerRed = document.querySelector('#rouge'),
    playerGreen = document.querySelector('#vert'),
    container = document.querySelector('#container'),
    dice = document.querySelector("#number").children

function setCaseId(){
    Array.from(caseList).forEach(el => {
        el.setAttribute('id', `c-${el.innerHTML}`) 
    });
}

function enableBtn(isEnabled){
    if(isEnabled){
        greenBtn.setAttribute('disabled', 'disabled')
        redBtn.setAttribute('disabled', 'disabled')

    } else {
        greenBtn.removeAttribute('disabled')
        redBtn.removeAttribute('disabled')
    }
}

function resetPlayerPos(player){
    let parent = player.parentNode
    const playerPos = parent.getAttribute('id')
    console.log(parent, playerPos)
    if(playerPos != 'container')  {
        console.log(container)
        container.insertBefore(player, document.querySelector('#divButRouge'))
    }
}

function resetDice(){
    document.querySelector('.selected')?.classList.remove('selected')
}

function rollingDice(){
    const roll = Math.floor(Math.random() * 6) + 1
    document.querySelector('.selected')?.classList.remove('selected')
    dice.item(roll-1).setAttribute('class', 'selected')
    
    return roll 
}

function reset(isBtnEnabled){
    resetPlayerPos(playerGreen)
    resetPlayerPos(playerRed)
    resetDice()
    enableBtn(isBtnEnabled)
}

function play(player){
    let parent = player.parentNode
    const roll = rollingDice(),
          parentId = parent.getAttribute('id')

    
    let playerPos = parentId == 'container' ? roll : parseInt(parentId.split('-')[1]) + roll,
        selectedCase = document.querySelector(`#c-${playerPos}`)
    
    if(playerPos >= 54) {
        alert(`WINNER !! player : ${player.getAttribute('id')}`)
        reset(true)
    } else {
       
        if(selectedCase.classList.contains('black-case')) resetPlayerPos(player)
        else {
            let pos = playerPos
            if(selectedCase.classList.contains('red-case'))
                pos = player.getAttribute('id') == 'rouge' ? pos + 2 : pos -2
            else if(selectedCase.classList.contains('green-case'))
                pos = player.getAttribute('id') == 'green' ? pos + 2 : pos -2
            
            selectedCase = document.querySelector(`#c-${pos}`)
            selectedCase.appendChild(player)
        }
       
    }
}

setCaseId()

startBtn.addEventListener('click', () => {
    console.log('START')
    reset(false)
})

redBtn.addEventListener('click', e => {
    play(playerRed);
    greenBtn.removeAttribute('disabled', 'disabled')
    redBtn.setAttribute('disabled', 'disabled')
})
greenBtn.addEventListener('click', e => {
    play(playerGreen);
    greenBtn.setAttribute('disabled', 'disabled')
    redBtn.removeAttribute('disabled', 'disabled')
})

