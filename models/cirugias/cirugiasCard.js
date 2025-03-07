const { DataTypes } = require("sequelize");
const Sequelize = require("../../dbconnection/db");

const cirugias = Sequelize.define(
  "cirugias",
  {
    id: {
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
    },
    fotoLink: {
      type: DataTypes.STRING, // Almacena el enlace de la foto
      allowNull: true, // Puedes ajustarlo según sea necesario
    }
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = cirugias;
