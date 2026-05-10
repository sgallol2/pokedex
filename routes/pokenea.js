const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokeneaController');

// Ruta: GET /pokenea
router.get('/', pokeneaController.getRandomPokenea);

module.exports = router;
