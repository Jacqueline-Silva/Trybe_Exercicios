// 10 - Adivinhar a sequencia antes de executar:

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// Minha resposta: 1B, 1T, 1A, 2B, 2T, 2A...
// Resposta correta: 1B, 1T, 1A, 1B, 2B, 2T, 2A, 1A

/* 
  Por quê?
  >>>>>>>>> O before sempre virá antes da fase de test, portanto, se repete antes do bloco describe. (No caso 1B, pois esta fora do bloco)
      O after sempre virá após fase de test, portanto, se repete após bloco describe. (1A, pois está fora do bloco)

  1B > Fase Setup, antes de inicializar o teste
  1T > Fase Test, momento onde os testes são realizados
  1A > Fase Teardown, após realização dos teste, limpeza dos dados.

  1B > Antes de inicializar o bloco describe

  INICIO - BLOCO DESCRIBE
  2B > Dentro do bloco describe a ordem é a mesma de fora.
       Primeiro o 2B antes da fase de testes
  2T > Momento dos testes
  2A > Após testes e limpeza de dados
  FIM - BLOCO DESCRIBE
  
  1A - Após execução do bloco
*/