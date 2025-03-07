const { DataTypes } = require("sequelize");
const Sequelize = require("../../dbconnection/db");

const doctores = Sequelize.define(
    "doctores",
    {
        doctorId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        especialidad: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: true, // Cambiado a true
            defaultValue: "NUESTROS PROFESIONALES",
        },
        introduccion: {
            type: DataTypes.STRING,
            allowNull: true, // Cambiado a true
            defaultValue: "Conoce a los profesionales dedicados a brindarte el mejor servicio.",
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true, // Cambiado a true
            defaultValue: "Conoce a los profesionales dedicados a brindarte el mejor servicio.",
        }
    },
    {
        timestamps: true,
        paranoid: true,
    }
);

module.exports = doctores;