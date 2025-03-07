const GalleryService = require("../services/galleryService"); // Ruta correcta

async function crearGallery(req, res) {
  try {
    const { imageUrl, description } = req.body;
    if (!imageUrl) {
      return res.status(400).json({ error: "El campo 'imageUrl' es requerido" });
    }
    const newGallery = await GalleryService.crearGallery({ imageUrl, description });
    res.status(201).json(newGallery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function obtenerGallery(req, res) {
  try {
    const gallery = await GalleryService.obtenerGallery();
    res.status(200).json(gallery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function obtenerGalleryPorId(req, res) {
  try {
    const { id } = req.params;
    const galleryItem = await GalleryService.obtenerGalleryPorId(id);
    if (galleryItem) {
      res.status(200).json(galleryItem);
    } else {
      res.status(404).json({ error: "Item de galería no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function actualizarGallery(req, res) {
  try {
    const { id } = req.params;
    const { imageUrl, description } = req.body;
    const updatedGallery = await GalleryService.actualizarGallery(id, { imageUrl, description });
    if (updatedGallery) {
      res.status(200).json(updatedGallery);
    } else {
      res.status(404).json({ error: "Item de galería no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function eliminarGallery(req, res) {
  try {
    const { id } = req.params;
    const deleted = await GalleryService.eliminarGallery(id);
    if (deleted) {
      res.status(204).json({ message: "Item de galería eliminado" });
    } else {
      res.status(404).json({ error: "Item de galería no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  crearGallery,
  obtenerGallery,
  obtenerGalleryPorId,
  actualizarGallery,
  eliminarGallery,
};
