// routes/servicios.routes.js

const express = require("express");
const router = express.Router();
const serviciosController = require("../controller/serviciosController");

router.post("/createService", serviciosController.crearServicio);
router.get("/getAllServices", serviciosController.obtenerServicios);
router.get("/getService/:id", serviciosController.obtenerServicioPorId);
router.put("/updateService/:id", serviciosController.actualizarServicio);
router.delete("/deleteService/:id", serviciosController.eliminarServicio);

module.exports = router;
