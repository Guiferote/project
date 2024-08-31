let escolhaUsuario = prompt("Vamos jogar pedra, papel ou tesoura! \n" +
    "Qual você escolhe?"
).toLowerCase();

let escolhaComputador = Math.floor(Math.random() *3) + 1;

switch(escolhaComputador){
    case 1:
        escolhaComputador = "pedra";
        break;
    case 2:
        escolhaComputador = "papel";
        break;
    case 3:
        escolhaComputador = "tesoura";
        break;
}

let resultadoPartida;

if(escolhaUsuario === "pedra" || escolhaUsuario === "papel" || escolhaUsuario === "tesoura"){

    if(escolhaUsuario = "pedra"){
        
        switch(escolhaComputador){
            case "pedra":
                resultadoPartida = "Empate!";
                break;
            case "papel":
                resultadoPartida = "Derrota!";
                break;
            case "tesoura":
                resultadoPartida = "Vitoria!";
                break;
        }

    }
    else if(escolhaUsuario = "papel"){

        switch(escolhaComputador){
            case "pedra":
                resultadoPartida = "Vitoria!";
                break;
            case "papel":
                resultadoPartida = "Empate!";
                break;
            case "tesoura":
                resultadoPartida = "Derrota!";
                break;
        }
    }
    else{

        switch(escolhaComputador){
            case "pedra":
                resultadoPartida = "Derrota!";
                break;
            case "papel":
                resultadoPartida = "Vitoria!";
                break;
            case "tesoura":
                resultadoPartida = "Empate!";
                break;
        }
    }
}
else{
    alert("Por favor, insira uma das opções corretas!");
}

alert("E o resultado da sua partida foi: " + resultadoPartida); 
alert("A maquina escolheu: " + escolhaComputador);