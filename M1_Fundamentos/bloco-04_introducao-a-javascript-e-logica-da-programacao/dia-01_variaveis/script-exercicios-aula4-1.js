// exercicios part2 
const base = 8;
let height = 5;
const area = base * height;
console.log (area);

// exercicios part3
const notaDoCandidato = 78;

if (notaDoCandidato >= 80) {
    console.log("Parabéns, você foi aprovado!");
} else if (notaDoCandidato < 80 && notaDoCandidato >= 60) {
    console.log ("Parabéns, você está na nossa lista de espera");
} else if (notaDoCandidato < 60) {
    console.log ("Você foi reprovado!")
}

// exercicios part5
let estadoDoProcesso = "Lista";

switch (estadoDoProcesso) {
    case "Aprovada":
 console.log ("Aprovada");
 break;

    case "Lista":
 console.log ("Lista");
 break;

    case "Reprovada":
console.log ("Reprovada")

default:
console.log ("Não se aplica")
}
