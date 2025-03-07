const Gallery = require("../models/gallery/gallery"); // Ruta correcta al modelo

async function crearGallery(data) {
  try {
    return await Gallery.create(data);
  } catch (error) {
    throw error;
  }
}

async function obtenerGallery() {
  try {
    return await Gallery.findAll();
  } catch (error) {
    throw error;
  }
}

async function obtenerGalleryPorId(id) {
  try {
    return await Gallery.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function actualizarGallery(id, data) {
  try {
    const [updated] = await Gallery.update(data, { where: { galleryId: id } });
    if (updated) {
      return await Gallery.findByPk(id);
    }
    return null;
  } catch (error) {
    throw error;
  }
}

async function eliminarGallery(id) {
  try {
    const deleted = await Gallery.destroy({ where: { galleryId: id } });
    return !!deleted; // Devuelve true si se eliminó, false si no
  } catch (error) {
    throw error;
  }
}

module.exports = {
  crearGallery,
  obtenerGallery,
  obtenerGalleryPorId,
  actualizarGallery,
  eliminarGallery,
};
