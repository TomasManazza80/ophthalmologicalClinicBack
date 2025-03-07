const { DataTypes } = require("sequelize");
const Sequelize = require("../../dbconnection/db");

const Gallery = Sequelize.define(
  "Gallery",
  {
    galleryId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = Gallery;
