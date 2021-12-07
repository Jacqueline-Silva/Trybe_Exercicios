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

// 2 -


  
   