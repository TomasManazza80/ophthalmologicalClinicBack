// inicio.service.js
const Inicio = require("../models/inicio/inicio"); // Asegúrate de que la ruta al modelo sea correcta (Sequelize)

const crearInicio = async (data) => {
  return Inicio.create(data);
};

const obtenerInicios = async () => {
  return Inicio.findAll();
};

const obtenerInicioPorId = async (InicioId) => {
  return Inicio.findByPk(InicioId);
};

const actualizarInicio = async (inicioId, data) => {
  const [updated] = await Inicio.update(data, {
    where: { inicioId },
  });
  if (updated) {
    return Inicio.findByPk(inicioId);
  }
  return null;
};

const eliminarInicio = async (id) => {
  const deleted = await Inicio.destroy({
    where: { id },
  });
  return deleted;
};

module.exports = {
  crearInicio,
  obtenerInicios,
  obtenerInicioPorId,
  actualizarInicio,
  eliminarInicio,
};