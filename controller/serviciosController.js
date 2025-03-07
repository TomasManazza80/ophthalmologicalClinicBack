// controllers/servicios.controller.js

const ServiciosService = require("../services/serviciosService"); // Ruta correcta

async function crearServicio(req, res) {
    try {
        const { texto1, texto2, link } = req.body;
        console.log('Datos recibidos:', req.body); // Añadir logs
        if (!texto1 || !texto2 || !link) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }
        const newService = await ServiciosService.crearServicio({ texto1, texto2, link });
        res.status(201).json(newService);
    } catch (error) { 
        res.status(500).json({ error: error.message });
    }
}


async function obtenerServicios(req, res) {
  try {
    const servicios = await ServiciosService.obtenerServicios();
    res.status(200).json(servicios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function obtenerServicioPorId(req, res) {
  try {
    const { id } = req.params;
    const servicio = await ServiciosService.obtenerServicioPorId(id);
    if (servicio) {
      res.status(200).json(servicio);
    } else {
      res.status(404).json({ error: "Servicio no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function actualizarServicio(req, res) {
  try {
    const { id } = req.params;
    const { texto1, texto2, link } = req.body;
    const updatedServicio = await ServiciosService.actualizarServicio(id, texto1, texto2, link);
    if (updatedServicio) {
      res.status(200).json(updatedServicio);
    } else {
      res.status(404).json({ error: "Servicio no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function eliminarServicio(req, res) {
  try {
    console.log( "estos son LOS PARAMSSS ",req.params);
    const { id } = req.params;
    const deleted = await ServiciosService.eliminarServicio(id);
    if (deleted) {
      res.status(204).json({ message: "Servicio eliminado" });
    } else {
      res.status(404).json({ error: "Servicio no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  crearServicio,
  obtenerServicios,
  obtenerServicioPorId,
  actualizarServicio,
  eliminarServicio,
};