// routes/cirugiaRoutes.js

const express = require('express');
const router = express.Router();
const inicioController = require('../controller/inicioController');

router.post('/createInicio', inicioController.crearInicio); // Cambiado a crearInicio
router.get('/getInicios', inicioController.getInicios); // Cambiado a obtenerInicios
router.get('/getInicio/:id', inicioController.getInicioPorId); // Cambiado a obtenerInicioPorId
router.put('/updateInicio/:id', inicioController.actualizarInicio); // Cambiado a actualizarInicio
router.delete('/deleteInicio/:id', inicioController.eliminarInicio); // Cambiado a eliminarInicio

module.exports = router; 