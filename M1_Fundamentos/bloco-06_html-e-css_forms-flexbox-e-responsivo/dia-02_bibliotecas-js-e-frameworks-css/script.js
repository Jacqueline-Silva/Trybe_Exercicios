

let selectEst = document.querySelector('#est');
//let dtInicio = document.querySelector('#dtInicio');
let btnEnvia = document.querySelector('#btnEnvia');
let btnLimpa = document.querySelector('#btnLimpa');
let dadosDoCv = document.getElementById('dadosDoCv')

/*import JustValidatePluginDate from 'just-validate-plugin-date';*/

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
  .addRequiredGroup('#residencia', [
    {
      rule: 'required',
      errorMessage: 'Por favor, determine sua residência.',
    },
  ])
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
  ]) /*
  .addField('#dtInicio', [
    {
      plugin: JustValidatePluginDate ( ( )  =>  ( { 
        required: true,
        format: 'dd/MM/aaaa', 
      })), 
      errorMessage: 'A data deve estar no formato dd MM aaaa (por exemplo, 20 dez 2021)', 
    },
  ])*/
  .onSuccess((event) => {
    event.preventDefault();
    console.log('Validation passes and form submitted', event);
  });

  /*

  function prevent(event) {
    event.preventDefault();
    
  } btnEnvia.addEventListener('click', prevent);
  
  function limpar() {
  
  } btnLimpa.addEventListener('click', limpar)

  */
  