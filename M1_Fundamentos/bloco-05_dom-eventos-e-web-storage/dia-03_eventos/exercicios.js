function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  /* 1 - criar os dias no calendario dinamicamente
         adicionar como filhos da <ul> com ID "days"
         adicionar a classe 'day'
         24,25,31 feriados que recebem classe 'holiday'
         4,11,18,25 são sextas - recebem classe 'friday'
  */
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
    let listaUL = document.getElementById('days');
    
  for (let dias = 0; dias < dezDaysList.length; dias +=1){
    let listaDias = document.createElement ('li');   
    listaDias.innerText = dezDaysList[dias];
    listaDias.className = 'day'
    listaUL.appendChild(listaDias);

    if (dezDaysList[dias] === 24||dezDaysList[dias] === 31){
        listaDias.className = 'day holiday';
    } 
    if (dezDaysList[dias] === 4 || dezDaysList[dias] === 11 || dezDaysList[dias] === 18){
        listaDias.className = 'day friday'
    }
    if (dezDaysList[dias] === 25 ) {
        listaDias.className = 'day holiday friday'
    }
  }

/* 2 - função com paramentro 'feriados'
       botao com o mesmo nome
       id 'btn-holiday'
       add como filho da div com classe 'buttons-container

REFERENCIA: https://www.devmedia.com.br/forum/criar-botao-dinamicamente-no-javascript/554111
*/
  let divBtnContainer = document.querySelector('.buttons-container')

  function creatBtn (Feriados){
    let cBtn = document.createElement('button');
    cBtn.id = 'btn-holiday'
    cBtn.textContent = 'Feriados'
    divBtnContainer.appendChild(cBtn);
  } creatBtn();

  /* 3 -
        add ao botao 'feriados' um evento 'click' que muda cor de fundo dos dias que possuem classe 'holiday'.
        possuir a logica inversa para cor original rgb(238,238,238)
 */
 
let selectBtn = document.querySelector('#btn-holiday');
let selectAllHoliday = document.querySelectorAll('.holiday');

function colorGreen (){
  for (x in selectAllHoliday){
    selectAllHoliday[x].style.background = 'limeGreen';
  }
}

/* 
function colorOriginal (){
  for (i in selectAllHoliday){
    if (document.getComputedStyle(selectAllHoliday[i]).background == 'limeGreen'){
      selectAllHoliday[i].style.background = 'white';
    }
  }
} 
*/

selectBtn.addEventListener('click', colorGreen);


/* 4 - função com paramentro 'sexta-feira'
       criar botao dinamicamente com o nome 'Sexta-feira"
       id 'btn-friday'
       filho da div 'button-container'
*/

function createBtnF (SextaFeira){
  let cBtnF = document.createElement('button');
  cBtnF.id = 'btn-friday';
  cBtnF.textContent = 'Sexta-feira';
  divBtnContainer.appendChild(cBtnF);
} createBtnF();

/* 5 - add ao butao 'sexta-feira' um evento 'click' que modifica o texto nos dias que são sexta-feira
       incluir lógica inversa para desfazer.
*/
let allFriday = document.querySelectorAll('.friday')
let callBtnFriday = document.querySelector('#btn-friday')
function friday (){
  for (day in allFriday){
  allFriday[day].innerHTML = 'Sexta-feira'
  }
}


callBtnFriday.addEventListener('click', friday);

/* 6 - função que crie efeito zoom, ao passar o mouse em um dia do mes
       quando ponteira entrar - aumenta
       quando ponteiro sair - diminui
       usar event.target

let minhasLi = document.querySelectorAll('li');
let selectClassDay = document.querySelectorAll('.day')

selectClassDay.addEventListener('mouseout', function(enter){
  enter.target = minhasLi.style.fontSize = '100px';
});
*/
/* 7 - uma função que add uma tarefa personalizada
     como paramentro a string com o nome da tarefa
     criar dinamicamente elemento span
     add como filha da div com classe 'my-tasks'
*/
let divTasks = document.querySelector('.my-tasks')

function toDo (){
  let criaSpan = document.createElement('span')
  criaSpan.id = 'span'

  let criaLabel = document.createElement('label');
  criaLabel.textContent = 'Novo:'
  
  let criaInput = document.createElement('input')
  criaInput.placeholder = 'Criar tarefa personalizada'
  criaInput.id = 'inputTask'

  let criaBtn = document.createElement('button')
  criaBtn.textContent = 'Adicionar'
  criaBtn.id = 'btnTask'

  divTasks.appendChild(criaSpan)

  criaSpan.appendChild(criaLabel)
  criaSpan.appendChild(criaInput)
  criaSpan.appendChild(criaBtn)
} toDo();

let inputTask = document.querySelector('#inputTask')
let btnTask = document.querySelector('#btnTask')
let Span = document.querySelector('#span')

function addTaks (){
  if(inputTask.value != '') {
    let criaLi = document.createElement('li');
    criaLi.className = 'liTasks'
    criaLi.innerText = inputTask.value
    divTasks.appendChild(criaLi)
    inputTask.value = ''
  } else {
    alert ('Erro! Por favor insira uma tarefa.')
  }
}
btnTask.addEventListener('click', addTaks)

/* 8 - função que adiciona legenda com cor para tarefa criada no 7.
       recebe como paramentro 'cor'
       cria dinamicamente uma div com classe 'task'
       o paramentro devera ser a cor de fundo de cada div criada
       add como filho da div 'my-tasks'
*/

/* 9 - função que add evento 'click' 
       que ao clicar na cor da div, atribua a ela a classe 'task selected'
       ao clicar novamente, remover a classe
*/

/* 10 - função que add evento 'click' no dia do mes
        e atribua a este dia a cor da legenda da tarefa selecionada
        ao clicar novamente, a cor deverá ser a inicial
*/

/* BONUS - Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
Ao pressionar a tecla "enter" o evento também deverá ser disparado.
Dica - Propriedade: key .

REFERENCIA: https://www.horadecodar.com.br/2020/12/10/acionar-um-button-com-o-enter-do-teclado-em-javascript/
*/
let btnAdd = document.querySelector('#btn-add');
let input = document.querySelector('#task-input');
let divInput = document.querySelector('.input-container');
function addCompromis (){
  if (input.value !== ''){
    let createToDo = document.createElement('li');
    createToDo.innerText = input.value;
    divInput.appendChild(createToDo);
    input.value = '';
  } else {
    alert ('Erro! Adicione um compromisso.');
  }
}

btnAdd.addEventListener('click', addCompromis);

/*
btnAdd.addEventListener('keydown', function(event){
switch (event.key){
  case 'Enter':
    addCompromis();
    break;
  default:
} 
});


KeyboardEvent.key

*/


  
   