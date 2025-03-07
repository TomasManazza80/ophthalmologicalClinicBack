// routes/aboutus.routes.js

const express = require("express");
const router = express.Router();
const aboutUsController = require("../controller/aboutController");

router.post("/createAboutUs", aboutUsController.crearAboutUs);
router.get("/getAllAboutUs", aboutUsController.obtenerAboutUs);
router.get("/getAboutUs/:id", aboutUsController.obtenerAboutUsPorId);
router.put("/updateAboutUs/:id", aboutUsController.actualizarAboutUs);
router.delete("/deleteAboutUs/:id", aboutUsController.eliminarAboutUs);

module.exports = router;


