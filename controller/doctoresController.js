// controllers/doctorController.js
const doctorService = require('../services/dorctoresService');

const createDoctor = async (req, res) => {
  try {
    const newDoctor = await doctorService.createDoctor(req.body);
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllDoctors = async (req, res) => {
  try {
    const doctores = await doctorService.getAllDoctors();
    res.status(200).json(doctores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDoctorById = async (req, res) => {
  try {
    const doctor = await doctorService.getDoctorById(req.params.id);
    if (doctor) {
      res.status(200).json(doctor);
    } else {
      res.status(404).json({ error: 'Doctor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDoctor = async (req, res) => {
  try {
    const updatedDoctor = await doctorService.updateDoctor(req.params.id, req.body);
    if (updatedDoctor) {
      res.status(200).json(updatedDoctor);
    } else {
      res.status(404).json({ error: 'Doctor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteDoctor = async (req, res) => {
  console.log("este es el id!!!!",req.params.doctorId);
  try {
    const deleted = await doctorService.deleteDoctor(req.params.doctorId);
    if (deleted) {
      res.status(204).json({ message: 'Doctor eliminado' });
    } else {
      res.status(404).json({ error: 'Doctor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
};