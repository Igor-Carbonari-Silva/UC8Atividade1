let readlineSync = require('readline-sync');
var nomePeca;
var pesoPeca;
var capacidade = 7;

nomePeca = readlineSync.question("Digite o nome da peça: ");
pesoPeca = readlineSync.question("Digite o peso da peça: ");

if(pesoPeca > 100){
    //condição verdadeira
    if(capacidade > 10){
        //condição verdadeira
        console.log("Não cadastrar, capacidade máxima atingida!");
    } else if(nomePeca.length < 3) {
        //condição falsa
        console.log("Não cadastrar, nome inválido!");
    }else{
        console.log("Peça cadastrada com SUCESSO!!!");
    }
} else {
    //condição falsa
    console.log("Não cadastrar, peso insuficiente!");
}