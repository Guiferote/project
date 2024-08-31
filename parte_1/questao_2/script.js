let numeroA = Number(prompt("Insira o divisor aqui: "));
let numeroB = Number(prompt("Insira o dividendo aqui: "));

numeroA = Math.floor(numeroA);
numeroB = Math.floor(numeroB);

let resultadoDivisao = numeroA / numeroB;
let restoDivisao = numeroA % numeroB;

alert("O resultado da divisão é: " + resultadoDivisao + "\nO resto da divisão é: " + restoDivisao);