let nome = document.getElementById('name');
let email = document.getElementById('email');
let cpf = document.getElementById('cpf');
let endereco = document.getElementById('end');
let cidade = document.getElementById('cidade');
let estado = document.getElementById('est');
let resumoCv = document.getElementById('txtarea');
let cargo = document.getElementById('cargo');
let descCargo = document.getElementById('descCargo');
let dataDeInicio = document.getElementById('dtInicio');
let apto = document.getElementById('apt');
let casa = document.getElementById('casa')

let selectEst = document.querySelector('#est');
let btnEnvia = document.querySelector('#btnEnvia');
let btnLimpa = document.querySelector('#btnLimpa');
let dadosDoCv = document.getElementById('dadosDoCv');

const validation = new JustValidate('#form' , {
  errorFieldCssClass: 'is-invalid',
});

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


validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Por favor, insira seu nome.'
    },
    {
      rule: 'maxLength',
      value: 40,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email necessário.',
    },
    {
      rule: 'email',
      errorMessage: 'Este email é inválido, por favor insira outro!',
    },
  ])
  .addField('#cpf', [
    {
      rule: 'required',
      errorMessage: 'Insira seu CPF.',
    },
    {
      rule: 'maxLength',
      value: 11,
    },
    {
      rule: 'number',
      errorMessage: 'Insira somente os números de seu CPF.',
    },
  ])
  .addField('#end', [
    {
      rule: 'required',
      errorMessage: 'Insira seu endereço.',
    },
    {
      rule: 'maxLength',
      value: 200,
    },
  ])
  .addField('#cidade', [
    {
      rule: 'required',
      errorMessage: 'Por favor, insira a cidade.',
    },
    {
      rule: 'maxLength',
      value: 28,
    },
  ])
  .addField('#est', [
    {
      rule: 'required',
      errorMessage: 'Defina o estado onde mora.',
    },
  ])
  .addRequiredGroup('#residencia', 'Por favor, determine a sua residência.')
  .addField('#txtarea', [
    {
      rule: 'required',
      errorMessage: 'Insira um breve resumo do seu currículo.',
    },
    {
      rule: 'maxLength',
      value: 1000,
    },
  ])
  .addField('#cargo', [
    {
      rule: 'required',
      errorMessage: 'Por favor, indique o cargo exercido.',
    },
    {
      rule: 'maxLength',
      value: 40,
    },
  ])
  .addField('#descCargo', [
    {
      rule: 'required',
      errorMessage: 'Por favor, descreva brevemente o cargo.',
    },
    {
      rule: 'maxLength',
      value: 500,
    },
  ]) 
  .addField('#dtInicio', [
    {
      rule: 'required',
      errorMessage: 'Por favor, insira uma data.',
    },
  ])
  .onSuccess((event) => {
    event.preventDefault();
    
    console.log('Validation passes and form submitted', event);
  });
    

  btnEnvia.addEventListener('click', function(){
    if (nome.value && email.value && cpf.value && endereco.value && cidade.value !== ''){
      dadosDoCv.innerHTML = `
        <strong>Nome:</strong> ${nome.value}; <br>
        <strong>Email:</strong> ${email.value}; <br>
        <strong>CPF:</strong> ${cpf.value}; <br>
        <strong>Endereço:</strong> ${endereco.value}; <br>
        <strong>Cidade:</strong> ${cidade.value}; <br>
        <strong>Estado:</strong> ${estado.value}; <br>`
    }
      
    if(apto.checked === true){
      dadosDoCv.innerHTML += `<strong>Residência:</strong> Apartamento<br>`
    }
    if(casa.checked === true){
      dadosDoCv.innerHTML += `<strong>Residência:</strong> Casa <br>`
    }
    if (resumoCv.value && cargo.value && descCargo.value && dataDeInicio.value !== '') {
      dadosDoCv.innerHTML += `
        <strong>Resumo do Currículo:</strong> ${resumoCv.value}; <br>
        <strong>Cargo:</strong> ${cargo.value}; <br>
        <strong>Descrição do cargo:</strong> ${descCargo.value}; <br>
        <strong>Data de Inicio:</strong> ${dataDeInicio.value}; <br>
        `
    }
  });


var picker = new Pikaday({
  field: document.getElementById('dtInicio'),
  format: 'D/M/YYYY',
  toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});


function limpar() {
  let arrayNames = [nome, email, cpf, endereco, cidade, resumoCv,cargo, descCargo, dataDeInicio, apto, casa];
  for (l = 0; l < arrayNames.length; l += 1) {
    arrayNames[l].innerHTML = '';
    dadosDoCv.innerHTML = '';
  }
}
btnLimpa.addEventListener('click', limpar);
