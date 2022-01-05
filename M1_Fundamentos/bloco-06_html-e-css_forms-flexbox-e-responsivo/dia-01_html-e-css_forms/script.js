let selectEst = document.querySelector('#est');
let dtInicio = document.querySelector('#dtInicio');

function criandoOptions() {
  let arrayEstados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  for(let i = 0; i < arrayEstados.length; i += 1) {
    let criaOption = document.createElement('option');
    criaOption.innerHTML = arrayEstados[i];
    criaOption.value = arrayEstados[i];

    selectEst.appendChild(criaOption);
  }
} criandoOptions();

/*
function dataDeInicio() {
  if(dtInicio.value == '') {
    alert('Erro. Campo vazio!')
  } 
} dtInicio.addEventListener('mouseout', dataDeInicio)
*/
/*
let form1 = document.querySelector('.form1');
let form2 = document.querySelector('.form2');
function desabilita(event) {
    event.preventDefault();

}
form1.addEventListener('click', desabilita)
form2.addEventListener('click', desabilita)
*/

let btnEnvia = document.querySelector('#btnEnvia');
let btnLimpa = document.querySelector('#btnLimpa');
