const { DataTypes } = require("sequelize");
const Sequelize = require("../../dbconnection/db");

const AboutUs = Sequelize.define(
  "AboutUs",
  {
    aboutUsId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    razones: {
      type: DataTypes.JSON, // Para almacenar una lista de razones como un array de strings
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = AboutUs;
