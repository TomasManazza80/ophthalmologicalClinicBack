const { DataTypes } = require("sequelize");
const Sequelize = require("../../dbconnection/db");

const inicio = Sequelize.define(
  "inicio",
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
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = inicio;
