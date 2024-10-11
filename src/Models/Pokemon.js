const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Pokemon = sequelize.define(
  'Pokemon',
  {
    Nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Altura:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Peso:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    NivelPoder:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  },
);