const express = require('express');
const router = express.Router();
const visualController = require('../controllers/visualController');

// Ruta: GET /visual
router.get('/', visualController.getVisualPokenea);

module.exports = router;
