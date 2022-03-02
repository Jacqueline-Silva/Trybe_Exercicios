// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

// 1 
function clickLink(event) {
  event.preventDefault(); // Previne a abertura da nova janela
} 
HREF_LINK.addEventListener('click', clickLink);

// 2
function check(event) {
  event.preventDefault(); // Impede de clicar no check
}
INPUT_CHECKBOX.addEventListener('click', check);

// 3
function inputTxt(event) {
  if(event.key !== 'a') {
    event.preventDefault(); // Se a letra digitada for diferente de 'a', então previne o comportamento do texto que é escrever.
  }
} INPUT_TEXT.addEventListener('keypress', inputTxt);