// services/cirugiaService.js
const Cirugias = require('../models/cirugias/cirugias');

const createCirugia = async (cirugiaData) => {
  return Cirugias.create(cirugiaData);
};

const getAllCirugias = async () => {
  return Cirugias.findAll();
};

const getCirugiaById = async (id) => {
  return Cirugias.findByPk(id);
};

const updateCirugia = async (id, cirugiaData) => {
  const [updated] = await Cirugias.update(cirugiaData, {
    where: { id },
  });
  if (updated) {
    return Cirugias.findByPk(id);
  }
  return null;
};

const deleteCirugia = async (id) => {
  const deleted = await Cirugias.destroy({
    where: { id },
  });
  return deleted;
};

module.exports = {
  createCirugia,
  getAllCirugias,
  getCirugiaById,
  updateCirugia,
  deleteCirugia,
};