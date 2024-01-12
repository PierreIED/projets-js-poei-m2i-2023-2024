var resultat = document.querySelector("#resultat")
var valeurs = []
var somme = 0

// function ajouterValeur(chiffre){
//     valeurs.push(chiffre)
//     resultat.value = valeurs.join('')
//     if(chiffre == '+' || chiffre == '-' || chiffre == '*' || chiffre == '/'){
//         op = valeurs[valeurs.length-1]
//         valeurs.pop()
//         val1 = valeurs.join('')
//         valeurs = []
//     }else if(chiffre == '='){
//         valeurs.pop()
//         val2 = valeurs.join('')
//         somme = eval(val1 + op + val2)
//         valeurs = []
//         resultat.value = somme
//     }
//     console.log(val1, op, val2);
//     console.log(valeurs);
// }

function ajouterValeur(chiffre){
    valeurs.push(chiffre)
    resultat.value = valeurs.join('')
    if(chiffre == '='){
        valeurs.pop()
        somme = eval(valeurs.join(''))
        resultat.value = somme
    }
}

function ClearResultat(){
    resultat.value = ''
    valeurs = []
}
