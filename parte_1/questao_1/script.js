let dinheiroQueRecebi = Number(prompt("Insira aqui o dinheiro recebido:"));
let valorDoProduto = Number(prompt("Insira aqui o valor do produto:"));

let troco = dinheiroQueRecebi - valorDoProduto;

let trocoArredondadoCima = Math.ceil(troco);
let trocoArredondadoBaixo = Math.floor(troco);

console.log(troco);
console.log(trocoArredondadoCima);
console.log(trocoArredondadoBaixo);