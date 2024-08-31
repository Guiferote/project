let numeroInicio = Number(prompt("Insira aqui o número de inicio: "));
let numeroFim = Number(prompt("Insira aqui o número do fim: "));

numeroInicio = Math.floor(numeroInicio);
numeroFim = Math.floor(numeroFim);

let numeroMinimoAlcancado;
let numeroMaximoAlcancado;
let numeroAleatorio;

numeroAleatorio = Math.random() * (numeroFim - numeroInicio + 1) + numeroInicio;
numeroAleatorio = Math.round(numeroAleatorio);
console.log(numeroAleatorio)
