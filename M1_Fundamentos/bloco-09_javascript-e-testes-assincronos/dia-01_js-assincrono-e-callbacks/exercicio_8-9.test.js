// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./exercicio_8-9.js');
const { pokemons } = require('./exercicio_8-9.js');

describe('A função getPokemonDetails', () => {
  const arrPokemon = pokemons.map((e) => e.name);
  const random = Math.floor(Math.random() * 3)
  const filterPokemon = pokemons.filter((poke) => poke.name === arrPokemon[random])
  const pokeSquirt =  'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun';

  const pokeCharmander = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

  const pokeBulbasaur = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';

  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', () => {
    //
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
      try {
        expect(getPokemonDetails((poke) => poke.name === arrPokemon[random], (err, message)))
        done()
      } catch (err) {
        done(err)
      }
  });
});