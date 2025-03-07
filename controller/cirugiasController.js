// controllers/cirugiaController.js
const cirugiaService = require('../services/cirugiasService');

const createCirugia = async (req, res) => {
  try {
    const newCirugia = await cirugiaService.createCirugia(req.body);
    res.status(201).json(newCirugia);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllCirugias = async (req, res) => {
  try {
    const cirugias = await cirugiaService.getAllCirugias();
    res.status(200).json(cirugias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCirugiaById = async (req, res) => {
  try {
    const cirugia = await cirugiaService.getCirugiaById(req.params.id);
    if (cirugia) {
      res.status(200).json(cirugia);
    } else {
      res.status(404).json({ error: 'Cirugía no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCirugia = async (req, res) => {
  try {
    const updatedCirugia = await cirugiaService.updateCirugia(req.params.id, req.body);
    if (updatedCirugia) {
      res.status(200).json(updatedCirugia);
    } else {
      res.status(404).json({ error: 'Cirugía no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCirugia = async (req, res) => {
  try {
    const deleted = await cirugiaService.deleteCirugia(req.params.id);
    if (deleted) {
      res.status(204).json({ message: 'Cirugía eliminada' });
    } else {
      res.status(404).json({ error: 'Cirugía no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCirugia,
  getAllCirugias,
  getCirugiaById,
  updateCirugia,
  deleteCirugia,
};