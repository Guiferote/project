const ladoA = +prompt("Insira o lado A do triangulo: ");
const ladoB = +prompt("Insira o lado B do triangulo: ");
const ladoC = +prompt("Insira o lado C do triangulo: ");


let tipoTriangulo;
if(ladoA > 0 && ladoB > 0 && ladoC > 0){
    if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
    tipoTriangulo = "Equilátero";
    }
    else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
    tipoTriangulo = "Escaleno";
    }
    else{
    tipoTriangulo = "Isósceles";
    }

}
else{
    alert("Voce deve inserir apenas números válidos nos campos")
}

alert("O seu triângulo é: " + tipoTriangulo);