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
}
criandoOptions();

let btnEnvia = document.querySelector('#btnEnvia');
let btnLimpa = document.querySelector('#btnLimpa');

function dataDeInicio() {
  let dateValue = dtInicio.value.split('/');
  let day = dateValue[0];
  let month = dateValue[1];
  let year = dateValue[2];
  let today = new Date();
  let todayYear = today.getFullYear();

  if(dtInicio.value !== `${day}/${month}/${year}`){
    alert('Formato da data inválido! Insira uma data válida seguindo o padrão: dd/mm/aaaa');
  }

  if(day <= 0 || day > 31) {
    alert('Dia inválido. Corrija!');
  }
  if(month <= 0 || month > 12) {
    alert('Mês inválido. Corrija!');
  }
  if(year < 0 || year > todayYear) {
    alert('Ano inválido. Corrija!');
  }
}
btnEnvia.addEventListener('click', dataDeInicio);

let form1 = document.querySelector('.form1');
let form2 = document.querySelector('.form2');

function desabilita(event) {
  event.preventDefault();
}
btnEnvia.addEventListener('click', desabilita);

let nome = document.getElementById('name');
  let email = document.getElementById('email');
  let cpf = document.getElementById('cpf');
  let endereco = document.getElementById('end');
  let cidade = document.getElementById('cidade');
  let estado = document.querySelector('#est');
  let resumo = document.getElementById('txtarea');
  let cargo = document.getElementById('cargo');
  let dCargo = document.getElementById('descCargo')
  let dadosDoCv = document.querySelector('#dadosDoCv')
  
  let residencia = document.getElementsByName('res');
  let casa = document.getElementById('casa');
  let apto = document.getElementById('apt')


function pegaInfo() {
  
  if(nome.value.length <= 40 && nome.value !== ''){
    dadosDoCv.innerHTML = `<strong>Nome:</strong> ${nome.value} <br>`
  }
  if(email.value.length <= 50 && email.value !== ''){
    dadosDoCv.innerHTML += `<strong>Email:</strong> ${email.value}<br>`
  }
  if(cpf.value.length <= 11 && cpf.value !== ''){
    dadosDoCv.innerHTML += `<strong>CPF:</strong> ${cpf.value} <br>`
  }
  if(endereco.value.length <= 200 && endereco.value !== ''){
    dadosDoCv.innerHTML += `<strong>Endereço:</strong> ${endereco.value}<br>`
  }
  if(cidade.value.length <= 28 && cidade.value !== ''){
    dadosDoCv.innerHTML += `<strong>Cidade:</strong> ${cidade.value}<br>`
  }
  if(estado.value !== ''){
    dadosDoCv.innerHTML += `<strong>Estado:</strong> ${estado.value}<br>`
  }
  if(apto.checked === true){
    dadosDoCv.innerHTML += `<strong>Residência:</strong> Apartamento<br>`
  }
  if(casa.checked === true){
    dadosDoCv.innerHTML += `<strong>Residência:</strong> Casa <br>`
  }
  if(resumo.value.length <= 1000 && resumo.value !== ''){
    dadosDoCv.innerHTML += `<strong>Resumo do currículo:</strong> ${resumo.value}<br>`
  }
  if(cargo.value.length <= 40 && cargo.value !== ''){
    dadosDoCv.innerHTML += `<strong>Cargo:</strong> ${cargo.value}<br>`
  }
  if(dCargo.value.length <= 200 && dCargo.value !== ''){
    dadosDoCv.innerHTML += `<strong>Cargo:</strong> ${dCargo.value}<br>`
  }
  if(dtInicio.value.length !== 0){
    dataDeInicio()
    dadosDoCv.innerHTML += `<strong>Data de Inicio:</strong> ${dtInicio.value} <br>`
  }
}
btnEnvia.addEventListener('click', pegaInfo);

function limpa() {
  let div = document.querySelector('#apagaDiv');
  div.remove();
}
btnLimpa.addEventListener('click', limpa);
