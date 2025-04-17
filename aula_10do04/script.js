function verificar() {
   var numero = document.getElementById("numero").value;

    if (numero % 2 == 0) {
        document.getElementById("par").textContent = "o numero digitado é par";
    }else{
        document.getElementById("par").textContent = "o numero digitado é impar";
    }
};

function idade() {
    //aqui eu pego o valor digitado no input
    var idade = document.getElementById("idade").value;
    //aqui eu faço a separação de idade caso seja maior que 17 ou menor qu 17
    if (idade>17) {

        document.getElementById("maior").innerText = "voce é maior de idade";
        
    } else {
        document.getElementById("maior").innerText= "voce é menor de idade";
    }
};
function conta(){
    
    for (let i = 0; i < 11; i++) {
        //aqui eu crio um paragrafo novo toda vez que o loop inicia.
        const p = document.createElement("p");
        //aqui eu adiciono o conteudo a esse paragrafo.
        p.textContent = i
        //aqui eu falo onde o paragrafo vai aparecer.
        document.getElementById("1a10").append(p);
    };
};
function regresso() {

    let continha = document.getElementById("regresso").value;

    while (continha > 0) {
        const pr = document.createElement("p");
        pr.textContent = continha;
        
        document.getElementById("vindo").append(pr);

        continha -=1;
    };
};