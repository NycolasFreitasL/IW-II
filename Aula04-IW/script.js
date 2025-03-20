let nota = prompt("digite a sua nota");

if (nota >= 7){
    document.getElementById("resposta").innerHTML = "Aprovado"
}if (nota> 5 && nota < 7) { 
    document.getElementById("resposta").innerHTML = "recuperação"
}else{
    document.getElementById("resposta").innerHTML = "reprovado"
};