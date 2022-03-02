// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let pecaXadrex = "torre";

switch (pecaXadrex.toLowerCase()) {
    case "bispo":
        console.log ("bispo -> diagonal");
        break;

    case "rei": 
        console.log ("rei -> uma casa para qualquer lado");
        break;

    case "peão": 
        console.logo ("peão -> de uma ou duas casas para frente");
        break;

    case "torre":
        console.log ("torre -> somente na vertical e horizontal");
        break;
    
    case "cavalo":
        console.log ("cavalo -> anda em L");
        break;

    default:
        console.log ("Erro! Peça inválida");
}

 // Olhei no gabarito para entender como funcionava 