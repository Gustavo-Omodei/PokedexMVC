const pokemonModel = require('../Models/pokemonModel');


const getCadastrarTreinador = async(req, res) => {
    try {
        const pokemons = await pokemonModel.getPokemons();
        res.render('cadastrarTreinador', { pokemons });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao carregar os pokémons');
    }
};

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('index', { pokemons });

};

const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonsById(req.params.id);
    if (pokemon) {
        res.render('pokemon', { pokemon });
    } else {
        res.status(404).send('Pokémon não encontrado');
    }
};

module.exports = {
    getAllPokemons,
    getPokemon,
    getCadastrarTreinador
};