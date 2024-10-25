const express = require('express');
const router = express.Router();
const pokemonController = require('../Controllers/pokemonController');

router.get('/', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);

router.get('/cadastrar-pokemon', (req, res) => {
    res.render('cadastrarPokemon.ejs');
});
router.post('/cadastrar-pokemon', (req, res) => {
    const { nomeTreinador, genero, nomeRival, pokemonInicial } = req.body;
    res.redirect('/');
});

router.get('/cadastrar-treinador', pokemonController.getCadastrarTreinador);


router.post('/cadastrar-treinador', (req, res) => {
    const { Nome, Tipo } = req.body;
    res.redirect('/');
});
module.exports = router;