// Tempo padrão

let Pipoca = 10;
let Macarrão = 8;
let Carne = 15;
let Feijão = 12;
let Brigadeiro = 8;

//Setando parâmetros no microondas

let botao = "Feijão";
let prato = Feijão;
let tempo = 23;
let tempoTotal = prato + tempo;

//Testes de visualização

//console.log(prato)
console.log(tempoTotal)

//Programa & Configurações

const Ligar = (botao, prato, tempoTotal) => {

if (botao == "Pipoca" && tempoTotal >= Pipoca && tempoTotal <= 2*Pipoca || botao == 'Macarrão' && tempoTotal >= Macarrão && tempoTotal <= 2*Macarrão || botao == 'Carne' && tempoTotal >= Carne && tempoTotal <= 2*Carne || botao == 'Feijão' && tempoTotal >= Feijão && tempoTotal <= 2*Feijão || botao == 'Brigadeiro' && tempoTotal >= Brigadeiro && tempoTotal <= 2*Brigadeiro){
        return 'Prato pronto, bom apetite!!!'
}
else if (botao == 'Pipoca' && tempoTotal > 2*Pipoca && tempoTotal <3*Pipoca || botao == 'Macarrão' && tempoTotal > 2*Macarrão && tempoTotal <3*Macarrão || botao == 'Carne' && tempoTotal > 2*Carne && tempoTotal <3*Carne || botao == 'Feijão' && tempoTotal > 2*Feijão && tempoTotal < 3*Feijão || prato == 'Brigadeiro' && tempoTotal > 2*Brigadeiro && tempo <3*Brigadeiro){
    return 'Comida queimou!'
}
else if (botao == 'Pipoca' && tempoTotal >=3*Pipoca || botao == 'Macarrão' && tempoTotal >=3*Macarrão || botao == 'Carne' && tempoTotal >=3*Carne || botao == 'Feijão' && tempoTotal >=3*Feijão || botao == 'Brigadeiro' && tempoTotal >=3*Brigadeiro){
    return 'Kabum!'
}
else if (botao == 'Pipoca' && tempoTotal < Pipoca || botao == 'Macarrão' && tempoTotal < Macarrão || botao == 'Carne' && tempoTotal < Carne || botao == 'Feijão' && tempoTotal < Feijão || botao == 'Brigadeiro' && tempoTotal < Brigadeiro){
    return 'Tempo insuficiente!'
}

else {
    return  'Prato inexistente'
}
}
console.log(Ligar(botao, prato,tempoTotal))