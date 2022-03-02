// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) 
// em conceitos de A a F. Siga as regras.
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada 
// for menor que 0 ou maior que 100.

notaFinal = 23;

if (notaFinal >= 90 && notaFinal <= 100) {
    console.log ("A");
} else if (notaFinal >= 80 && notaFinal <= 89) {
    console.log ("B");
} else if (notaFinal >= 70 && notaFinal <= 79) {
    console.log ("C");
} else if (notaFinal >= 60 && notaFinal <= 69) {
    console.log ("D");
} else if (notaFinal >= 50 && notaFinal <= 59) {
    console.log ("E");
} else if (notaFinal > 0 && notaFinal < 50) {
    console.log ("F");
} else if (notaFinal < 0 || notaFinal > 100) {
    console.log ("Erro, nota inválida!")
}


// testei primeiro com SWITCH e não funcionou


// switch (notaFinal) {
//     case ">= 90" :
//         console.log ("A");
//             break;

//     case ">= 80":
//         console.log ("B");
//             break;

//     case ">= 70":
//         console.log ("C");
//             break;

//     case ">=60":
//         console.log ("D");
//             break;

//     case ">=50":
//         console.log ("E");
//             break;
    
//     case "<50": 
//         console.log ("F");
//             break;
    
//     case "<0 || >100":
//         console.log ("Erro")
//             break;
// }
