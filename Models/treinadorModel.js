const {Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite:memory');

const Treinador = sequelize.define(
    'Treinador',
    {
        codigoTreinador:{
            type: DataType.INTEGER,
            allowNull:false,
            primaryKey: true,
        },
        nome:{
            type: DataType.STRING,
            allowNull:false,
        },
        idade:{
            type: DataType.STRING,
            allowNull:false,
        },
        sexo:{
            type: DataType.STRING,
            allowNull:false,
        },

        pokemonEscolhidoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Pokemon,
                key: 'codigoPokemon'
            }
        }
    }
);