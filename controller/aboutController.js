// controllers/aboutus.controller.js

const AboutUsService = require("../services/aboutService"); // Ruta correcta

async function crearAboutUs(req, res) {
  try {
    const { descripcion, razones } = req.body; // Extrae los campos correctos
    if (!descripcion || !razones) { // Validación básica
      return res.status(400).json({ error: "Descripcion y razones son requeridos" });
    }
    const newAboutUs = await AboutUsService.crearAboutUs({ descripcion, razones });
    res.status(201).json(newAboutUs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function obtenerAboutUs(req, res) {
  try {
    const aboutUs = await AboutUsService.obtenerAboutUs();
    res.status(200).json(aboutUs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function obtenerAboutUsPorId(req, res) {
  try {
    const { id } = req.params;
    const aboutUs = await AboutUsService.obtenerAboutUsPorId(id);
    if (aboutUs) {
      res.status(200).json(aboutUs);
    } else {
      res.status(404).json({ error: "About Us no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function actualizarAboutUs(req, res) {
  try {
    const { id } = req.params;
    const { texto1, texto2, link } = req.body;
    const updatedAboutUs = await AboutUsService.actualizarAboutUs(id, { texto1, texto2, link });
    if (updatedAboutUs) {
      res.status(200).json(updatedAboutUs);
    } else {
      res.status(404).json({ error: "About Us no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function eliminarAboutUs(req, res) {
  try {
    const { id } = req.params;
    const deleted = await AboutUsService.eliminarAboutUs(id);
    if (deleted) {
      res.status(204).json({ message: "About Us eliminado" });
    } else {
      res.status(404).json({ error: "About Us no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  crearAboutUs,
  obtenerAboutUs,
  obtenerAboutUsPorId,
  actualizarAboutUs,
  eliminarAboutUs,
};
