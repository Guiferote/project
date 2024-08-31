let numeroA = Number(prompt("Insira o primeiro número aqui: "));
let numeroB = Number(prompt("Insira o segundo número aqui: "));

numeroA = Math.ceil(numeroA);
numeroB = Math.ceil(numeroB);


let potenciaA = numeroA ** 2;
let potenciaB = numeroB ** 3;

let raizQuadrada = Math.sqrt(potenciaA + potenciaB);

alert("O resultado é: " + raizQuadrada);