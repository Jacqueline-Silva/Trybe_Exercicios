// OBJECT.KEYS ================================================

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  author: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};
// console.log(coolestTvShow) // Retorna o objeto inteiro, com chaves e valores

 for (const property in coolestTvShow) {
   console.log(property);
} //retorna as chaves do objeto um por vez

console.log(Object.keys(coolestTvShow)); // Retorna as chaves do objeto em forma de array


// EXERCÍCIO 

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const skills = (obj) => {
  const arrObj = Object.keys(obj);
  for (let index in arrObj) {
    console.log(`Habilidade: ${arrObj[index]}, Nível: ${obj[arrObj[index]]}`)
  }
}
console.log(skills(student1));

