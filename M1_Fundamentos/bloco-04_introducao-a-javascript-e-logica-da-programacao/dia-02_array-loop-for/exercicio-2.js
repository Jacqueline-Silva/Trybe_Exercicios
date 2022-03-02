let word = 'tryber';
let inversao = "";
for (let index = 0; index < word.length; index +=1) {
    inversao = word[index] + inversao;
}
console.log (inversao);