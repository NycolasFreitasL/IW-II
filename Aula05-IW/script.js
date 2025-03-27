let nota = Number(prompt("digite a sua nota"));

if (nota >= 6 && nota <= 10){
    document.getElementById("resposta").innerHTML = "Aprovado"
}else if (nota>= 6 && nota <=7) { 
    document.getElementById("resposta").innerHTML = "recuperação"
}else if(nota <= 5 && nota >= 0){
    document.getElementById("resposta").innerHTML = "reprovado"
}else{
    document.getElementById("resposta").innerHTML = "digite numeros que estejam entre 0 e 10"
};