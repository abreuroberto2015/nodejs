var nome ="teste";
let numero =1;
var isAccepted = true;

var objeto={nome:"Luiz", idade: 29};
objeto.nome = nome;
objeto.idade = numero;

if(nome.indexOf("l") != -1){
    var x = parseInt(nome)
    nome = nome.replace("e",  "l");
}

var colecao = [];
colecao[0] = 1;
colecao[1] =  "teste";
colecao.push(6)

colecao.forEach(function(x){
    console.log(x);
})
function somar(valor1, valor2){
    return valor1 + valor2;
}
if(somar(1, 2) === 3){
    console.log("Funcionou!");
}

switch(numero){
    case 1: x
}

for(var x=0; x <10; x++){
    console.log(x);
}

while(numero < 10){
    console.log(numero);
    numero++;
}