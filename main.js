alert("Hello World!!");

let num1 = 5;
let num2 = 10;
let soma = num1 + num2;
console.log("Resultado da soma:", soma);
alert("Resultado da soma: " + soma);

let valor = 20; 
if (typeof valor === 'number') {
    alert("É um número");
} else {
    alert("Não é um número");
}


let texto = "Olá, mundo!"; 
if (typeof texto === 'string') {
    alert("É uma string");
} else {
    alert("Não é uma string");
}


let booleano = true; 
if (typeof booleano === 'boolean') {
    alert("É um booleano");
} else {
    alert("Não é um booleano");
}

let subNum1 = 15;
let subNum2 = 5;
let subtracao = subNum1 - subNum2;
console.log("Resultado da subtração:", subtracao);
alert("Resultado da subtração: " + subtracao);


let mulNum1 = 6;
let mulNum2 = 4;
let multiplicacao = mulNum1 * mulNum2;
console.log("Resultado da multiplicação:", multiplicacao);
alert("Resultado da multiplicação: " + multiplicacao);

let divNum1 = 20;
let divNum2 = 4;
let divisao = divNum1 / divNum2;
console.log("Resultado da divisão:", divisao);
alert("Resultado da divisão: " + divisao);


let numParaVerificarPar = 8; 
if (numParaVerificarPar % 2 === 0) {
    alert("É um número par");
} else {
    alert("Não é um número par");
}


let numParaVerificarImpar = 7; 
if (numParaVerificarImpar % 2 !== 0) {
    alert("É um número ímpar");
} else {
    alert("Não é um número ímpar");
}
