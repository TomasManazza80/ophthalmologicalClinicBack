const { DataTypes } = require("sequelize");
const Sequelize = require("../../dbconnection/db");

const informacion = Sequelize.define(
  "informacion",
  {
    informacionId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    aboutUsTitle: {
      type: DataTypes.STRING,
      defaultValue: "ABOUT US",
    },
    aboutUsContent: {
      type: DataTypes.TEXT,
      defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    whyChooseUsTitle: {
      type: DataTypes.STRING,
      defaultValue: "Why Choose Us?",
    },
    whyChooseUsItems: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [
        "Lorem ipsum dolor",
        "Tempor incididunt",
        "Lorem ipsum dolor",
        "Incididunt ut labore",
        "Aliquip ex ea commodo",
        "Lorem ipsum dolor",
        "Exercitation ullamco",
        "Lorem ipsum dolor"
      ],
    }
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = informacion;
