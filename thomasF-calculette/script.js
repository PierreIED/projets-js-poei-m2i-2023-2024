const ligneHaut = document.querySelector('#haut-affichage')
const ligneBas = document.querySelector('#bas-affichage')

const putToFirstLine = () => {
    ligneHaut.textContent += ligneBas.textContent
    ligneBas.textContent = ""
}

function effacer() {
    ligneHaut.textContent = ""
    ligneBas.textContent = ""
}

function number(nb) {
    ligneBas.textContent += nb
}

function operator(op) {
    ligneBas.textContent += op
    putToFirstLine()
}

function resultat() {
    putToFirstLine()
    const result = eval(ligneHaut.textContent)
    ligneBas.textContent = result
}

function parentheseOpen() {
    ligneBas.textContent += "("
}

function parentheseClose() {
    ligneBas.textContent += ")"
}

function dot() {
    ligneBas.textContent += "."
}