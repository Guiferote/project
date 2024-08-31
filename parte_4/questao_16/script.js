const ano = +prompt("Insira um ano com 4 digitos aqui:");
let isAnoBissexto;

if(ano % 4 === 0 && ano % 100 !== 0){
   
    isAnoBissexto = true;
}
else if(ano % 400 === 0){
    isAnoBissexto = true
}
else{
    isAnoBissexto = false
}

if(isAnoBissexto){
    alert("O seu ano é bissexto");
}
else{
    alert("O seu ano não é bissexto");
}