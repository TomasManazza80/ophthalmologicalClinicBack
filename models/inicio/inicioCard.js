const { DataTypes } = require("sequelize");
const Sequelize = require("../../dbconnection/db");
const inicioCard  = Sequelize.define(
  "inicioCard",
  {
    inicioId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    texto1: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    texto2: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
);

module.exports = inicioCard;