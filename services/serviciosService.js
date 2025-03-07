// services/servicios.service.js

const Servicio = require("../models/servicios/services"); // Asegúrate de que la ruta al modelo sea correcta

async function crearServicio(data) {
  try {
    return await Servicio.create(data);
  } catch (error) {
    throw error;
  }
}

async function obtenerServicios() {
  try {
    return await Servicio.findAll();
  } catch (error) {
    throw error;
  }
}

async function obtenerServicioPorId(id) {
  try {
    return await Servicio.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function actualizarServicio(id, data) {
  try {
    const [updated] = await Servicio.update(data, {
      where: { id },
    });
    if (updated) {
      return await Servicio.findByPk(id);
    }
    return null;
  } catch (error) {
    throw error;
  }
}

async function eliminarServicio(id) {
  try {
    const deleted = await Servicio.destroy({
      where: { id },
    });
    return !!deleted; // Devuelve true si se eliminó, false si no
  } catch (error) {
    throw error;
  }
}

module.exports = {
  crearServicio,
  obtenerServicios,
  obtenerServicioPorId,
  actualizarServicio,
  eliminarServicio,
};