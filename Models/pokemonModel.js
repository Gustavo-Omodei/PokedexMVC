const pokemons = [
    { id: 1, nome: 'Bulbasaur', tipo: 'Grass/Poison', image: 'https://img.pokemondb.net/sprites/firered-leafgreen/normal/bulbasaur.png' },
    { id: 2, nome: 'Squirtle', tipo: 'Water' },
    { id: 3, nome: 'Charmander', tipo: 'Fire' }
];

const getPokemons = () => pokemons;
const getPokemonsById = (id) => pokemons.find(p => p.id === parseInt(id));
const createPokemon = (nome, tipo) => pokemons.push(pokemons.length + 1, nome, tipo)

module.exports = { getPokemons, getPokemonsById, createPokemon };