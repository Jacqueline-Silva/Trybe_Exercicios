// PARTE 3 - OBJECT.VALUES =========================================

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};


// Sem Object.values
 const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }
  return skills;
};
console.log(listSkillsValuesWithFor(student));

// Com Object.values
const listSkillsValuesWithValues = (student) => Object.values(student); 
console.log(listSkillsValuesWithValues(student));



// PARTE 4 - OBJECT.ENTRIES =======================================

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

// Para ver os valores separados
for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};