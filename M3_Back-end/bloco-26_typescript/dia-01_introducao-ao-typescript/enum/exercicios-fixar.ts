// EXEMPLO

// enum StudentStatus {
//   Active = 1,
//   Inactive,
//   Paused
// }

// let newStudentStatus: StudentStatus = StudentStatus.Active; 
// console.log('newStudentStatus', newStudentStatus);


// EXERCÍCIOS DE FIXAR - ENUM
enum DiasSemana {
  'Domingo' = 1,
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sabado',
}

enum CoresArcoIris {
  Vermelho = 'vermelho',
  Laranja = 'laranja',
  Amarelo = 'amarelo',
  Verde = 'verde',
  Azul = 'azul',
  Anil = 'anil',
  Violeta = 'violeta',
}

enum AcoesAleatorias {
  Salvar,
  Imprimir,
  Abrir,
  Visualizar,
  Fechar,
}

enum PontosCardeais {
  Norte = 'N',
  Sul = 'S',
  Leste = 7, // L
  Oeste = 'O',
}

const diaSemana = DiasSemana.Quarta;
console.log('diaSemana - quarta, acessa valor', diaSemana); // 4

const corArcoIris = CoresArcoIris['Verde']; 
const corArcoIrisCHAVE = CoresArcoIris['verde'];
console.log('corArcoIris - verde, acessa valor', corArcoIris); // verde
console.log('corArcoIris - verde, acessa chave', corArcoIrisCHAVE); // undefined


const acaoAleatoria = AcoesAleatorias.Imprimir;
console.log('ação - Imprimir, acessa valor', acaoAleatoria); // 1

const pontoCardeal = PontosCardeais['Norte'];
console.log('pontoCardeal - norte, acessa valor', pontoCardeal); // 'N'

// testando se consigo acessar a chave pelo valor, somente com tipo number !?
const pontosCardeais = PontosCardeais[7];
console.log('pontoCardeal - leste, acessa chave', pontosCardeais); // 'Leste'
