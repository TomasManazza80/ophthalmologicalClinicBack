const InicioService = require("../services/inicioService");

async function crearInicio(req, res) {
  try {
    const newInicio = await InicioService.crearInicio(req.body);
    res.status(201).json(newInicio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getInicios(req, res) {
  try {
    const inicios = await InicioService.obtenerInicios();
    res.status(200).json(inicios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getInicioPorId(req, res) {
  try {
    const { id } = req.params;
    const inicio = await InicioService.obtenerInicioPorId(id);
    if (inicio) {
      res.status(200).json(inicio);
    } else {
      res.status(404).json({ error: "Registro no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function actualizarInicio(req, res) {
  try {
    const { id } = req.params;
    const updatedInicio = await InicioService.actualizarInicio(id, req.body);
    if (updatedInicio) {
      res.status(200).json(updatedInicio);
    } else {
      res.status(404).json({ error: "Registro no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function eliminarInicio(req, res) {
  try {
    const { id } = req.params;
    const deleted = await InicioService.eliminarInicio(id);
    if (deleted) {
      res.status(204).json({ message: "Registro eliminado" });
    } else {
      res.status(404).json({ error: "Registro no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  crearInicio,
  getInicios,
  getInicioPorId,
  actualizarInicio,
  eliminarInicio,
};