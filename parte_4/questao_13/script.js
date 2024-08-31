const valorTotal = parseInt(prompt('Digite o valor total da compra:'));
 
 
const formaPagamento = parseInt(prompt(
    'Digite a forma de pagamento:\n' +
    '1. Pagamento à vista, no dinheiro\n' +
    '2. Pagamento à vista, no débito\n' +
    '3. Pagamento à vista, no crédito\n' +
    '4. Pagamento a prazo, até 3x, no débito\n' +
    '5. Pagamento a prazo, acima de 3x, no débito\n'
));
 
let valorFinal;
 
if(formaPagamento <= 3){
    if (formaPagamento == 1 ){
        valorFinal = valorTotal - (valorTotal * 0.1);
        alert("O valor do produto com desconto é:  " + valorFinal);
    }
 
    else if (formaPagamento == 2){
        valorFinal = valorTotal - (valorTotal * 0.08);
        alert("O valor do produto com desconto é:  " + valorFinal);
    }
    else if (formaPagamento == 3){
        valorFinal = valorTotal - (valorTotal * 0.05);
        alert("O valor do produto com desconto é:  " + valorFinal);
    }
    else{
        alert("A forma de pagamento é inválida");
    }
}
 
else{
   
    if (formaPagamento == 4){
        const quantidadeParcelas = +prompt("Insira em quantas vezes (até 3) você gostaria de parcelar: ");
        valorFinal = valorTotal;
        const valorParcela = valorFinal / quantidadeParcelas;  
 
        alert("Você pagará " + quantidadeParcelas + " parcelas de "+ valorParcela);
    }
    else if (formaPagamento == 5){
        const quantidadeParcelas = +prompt("Insira em quantas vezes (acima de 3) você gostaria de parcelar: ");
        valorFinal = valorTotal + (valorTotal * 0.04);
        const valorParcela = valorFinal / quantidadeParcelas;
 
        alert(
        "O valor do produto com juros é: " + valorFinal + "\n" +
        "Você pagará " + quantidadeParcelas + " parcelas de "+ valorParcela);
    }
    else{
    alert("A forma de pagamento é inválida");
    }
}