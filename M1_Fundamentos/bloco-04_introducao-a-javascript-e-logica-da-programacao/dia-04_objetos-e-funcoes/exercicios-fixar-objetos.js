// PARTE 1 - OBJETOS

// 1 - Crie um objeto player

let pessoa = {
    name: 'Marta',
    lastName:'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
}
console.log (pessoa)

// 2 - "A jogadora Marta Silva tem 34 anos de idade".
console.log ("A jogadora " + pessoa.name + " " + pessoa.lastName + " tem " + pessoa.age + " anos de idade.");

// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas 
[2006, 2007, 2008, 2009, 2010, 2018] 


// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

// 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".