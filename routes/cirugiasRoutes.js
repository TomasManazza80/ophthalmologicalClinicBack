// routes/cirugiaRoutes.js
const express = require('express');
const router = express.Router();
const cirugiaController = require('../controller/cirugiasController');

router.post('/createCirugia', cirugiaController.createCirugia);
router.get('/getAllCirugias', cirugiaController.getAllCirugias);
router.get('/getCirugia/:id', cirugiaController.getCirugiaById);
router.put('/updateCirugia/:id', cirugiaController.updateCirugia);
router.delete('/deleteCirugia/:id', cirugiaController.deleteCirugia);

module.exports = router;