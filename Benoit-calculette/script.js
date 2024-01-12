var btns = document.querySelectorAll('button')
var resultat = document.querySelector("#resultat")

var valeurs = []
var somme = 0
var op;
var val1 = 0
var val2 = 0

function ajouterValeur(chiffre){
    valeurs.push(chiffre)
    resultat.value = valeurs.join('')
    if(chiffre == '+'){
        op = valeurs[valeurs.length-1]
        valeurs.pop()
        val1 = valeurs.join('')
        valeurs = []
    }else if(chiffre == '='){
        valeurs.pop()
        val2 = valeurs.join('')
        somme = eval(val1 + op + val2)
        valeurs = []
        resultat.value = somme
    }
    console.log(valeurs);
    console.log(val1);
    console.log(op);
}
console.log(somme)

// function ajouterValeur2(){
//     valeurs.push(btns.values)
//     resultat.value = valeurs.join('')
//     valeur1 = valeurs.join('')
//     if(btns.value == "+" || btns.value == "-" || btns.value == "*" || btns.value == "/"){
//         ajouterValeur2()
//     }
// }