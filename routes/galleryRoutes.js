const express = require("express");
const router = express.Router();
const galleryController = require("../controller/galleryController");

router.post("/createGallery", galleryController.crearGallery);
router.get("/getAllGallery", galleryController.obtenerGallery);
router.get("/getGallery/:id", galleryController.obtenerGalleryPorId);
router.put("/updateGallery/:id", galleryController.actualizarGallery);
router.delete("/deleteGallery/:id", galleryController.eliminarGallery);

module.exports = router;
