// services/aboutus.service.js

const AboutUs = require("../models/aboutUs/aboutUs"); // Asegúrate de que la ruta al modelo sea correcta

async function crearAboutUs(data) {
  try {
    return await AboutUs.create(data);
  } catch (error) {
    throw error;
  }
}

async function obtenerAboutUs() {
  try {
    return await AboutUs.findAll();
  } catch (error) {
    throw error;
  }
}

async function obtenerAboutUsPorId(id) {
  try {
    return await AboutUs.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function actualizarAboutUs(id, data) {
  try {
    const [updated] = await AboutUs.update(data, { where: { id } });
    if (updated) {
      return await AboutUs.findByPk(id);
    }
    return null;
  } catch (error) {
    throw error;
  }
}

async function eliminarAboutUs(id) {
  try {
    const deleted = await AboutUs.destroy({ where: { id } });
    return !!deleted; // Devuelve true si se eliminó, false si no
  } catch (error) {
    throw error;
  }
}

module.exports = {
  crearAboutUs,
  obtenerAboutUs,
  obtenerAboutUsPorId,
  actualizarAboutUs,
  eliminarAboutUs,
};
