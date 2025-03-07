const express = require('express');
const roleController = require('../controller/userController');

const router = express.Router();

router.get('/role', roleController.getRole);

module.exports = router;
