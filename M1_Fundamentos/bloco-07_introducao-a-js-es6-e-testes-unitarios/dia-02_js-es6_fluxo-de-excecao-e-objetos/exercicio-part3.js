// EXERCICIOS - PARTE 3 

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const ex01 = (destino, chaveAdd, valorAdd) => {
 
  Object.assign(destino, chaveAdd, valorAdd);
  
} 
  console.log(lesson2,lesson1,lesson3)