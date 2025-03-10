// services/doctorService.js
const Doctores = require('../models/doctores/doctores');

const createDoctor = async (doctorData) => {
  return Doctores.create(doctorData);
};

const getAllDoctors = async () => {
  return Doctores.findAll();
};

const getDoctorById = async (id) => {
  return Doctores.findByPk(id);
};

const updateDoctor = async (id, doctorData) => {
  const [updated] = await Doctores.update(doctorData, {
    where: { id },
  });
  if (updated) {
    return Doctores.findByPk(id);
  }
  return null;
};

const deleteDoctor = async (id) => {
  const deleted = await Doctores.destroy({
    where: { doctorId: id },
  });
  return deleted;
};

module.exports = {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
};