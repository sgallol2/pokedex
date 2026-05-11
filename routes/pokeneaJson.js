
const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokeneaController');

router.get('/', pokeneaController.getRandomPokenea);

module.exports = router;
