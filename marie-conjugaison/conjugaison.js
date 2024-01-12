var verbe = document.getElementById('verbe')
var affichage = document.getElementById('affichage')
var temps = document.getElementById('temps')
var paragraphes = document.querySelectorAll('.pronoms')
var pronoms = ['Je','Tu','Il/Elle','Nous','Vous','Ils/Elles']
var termiPresent = ['e','es','e','ons','ez','ent']
var termiFutur = ['ai','as','a','ons','ez','ont']
var termiImparfait = ['ais','ais','ait','ions','iez','aient']
var allerPresent = ["vais", "vas", "va", "allons", "allez", "vont"]

function present(){
    if (verbe.value.toLowerCase() == 'aller'){
        conjAllerPresent()
    } else {
        var verbeSansFin = verbe.value.substring(0, verbe.value.length-2).toLowerCase()
        var i = 0
        for (const p of paragraphes){
            p.innerHTML = ""
            if (verbe.value.substring(verbe.value.length-3, verbe.value.length) == 'cer' && i == 3){
                var verbeCorrige = verbe.value.substring(0, verbe.value.length-3).toLowerCase() + 'ç'
                p.innerHTML = pronoms[i] + " " + verbeCorrige + termiPresent[i]
                i++
            } else if (verbe.value.substring(verbe.value.length-3, verbe.value.length) == 'ger' && i == 3){
                var verbeCorrige =  verbe.value.substring(0, verbe.value.length-1).toLowerCase()
                p.innerHTML = pronoms[i] + " " + verbeCorrige + termiPresent[i]
                i++
            } else {
                p.innerHTML = pronoms[i] + " " + verbeSansFin + termiPresent[i]
                i++
            }
        }
        temps.innerHTML = `Présent de ${verbe.value}`
    }
}

function futur(){
    if(verbe.value.toLowerCase() == 'aller'){
        conjAllerFutur()
    } else {
        var i = 0
        for (const p of paragraphes){
            p.innerHTML = ""
            p.innerHTML = pronoms[i] + " " + verbe.value.toLowerCase() + termiFutur[i]
            i++
        }
        temps.innerHTML = `Futur de ${verbe.value}`
    }
}

function imparfait(){
    var verbeSansFin = verbe.value.substring(0, verbe.value.length-2).toLowerCase()
    var i = 0
    for (const p of paragraphes){
        p.innerHTML = ""
        if (verbe.value.substring(verbe.value.length-3, verbe.value.length) == 'cer' && (i == 0 || i == 1 || i == 2 || i == 5)){
            var verbeCorrige = verbe.value.substring(0, verbe.value.length-3).toLowerCase() + 'ç'
            p.innerHTML = pronoms[i] + " " + verbeCorrige + termiImparfait[i]
            i++
        } else if (verbe.value.substring(verbe.value.length-3, verbe.value.length) == 'ger' && (i == 0 || i == 1 || i == 2 || i == 5)){
            var verbeCorrige =  verbe.value.substring(0, verbe.value.length-1).toLowerCase()
            p.innerHTML = pronoms[i] + " " + verbeCorrige + termiImparfait[i]
            i++
        } else {
            p.innerHTML = pronoms[i] + " " + verbeSansFin + termiImparfait[i]
            i++
        }
    }
    temps.innerHTML = `Imparfait de ${verbe.value}`
}

function conjAllerPresent(){
    var i = 0
    for (const p of paragraphes){
        p.innerHTML = ""
        p.innerHTML = pronoms[i] + ' ' + allerPresent[i]
        i++
    }
    temps.innerHTML = `Présent de ${verbe.value}`
}

function conjAllerFutur(){
    var i = 0
    for (const p of paragraphes){
        p.innerHTML = ""
        p.innerHTML = pronoms[i] + ' ' + 'ir' + termiFutur[i]
        i++
    }
    temps.innerHTML = `Futur de ${verbe.value}`
}