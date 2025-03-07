// routes/doctorRoutes.js
const express = require('express');
const router = express.Router();
const doctorController = require('../controller/doctoresController');

router.post('/createDoctor', doctorController.createDoctor);
router.get('/getAllDoctors', doctorController.getAllDoctors);
router.get('/getDoctor/:id', doctorController.getDoctorById);
router.put('/updateDoctor/:id', doctorController.updateDoctor);
router.delete('/deleteDoctor/:id', doctorController.deleteDoctor);

module.exports = router;