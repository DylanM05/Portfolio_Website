const express = require('express');
const router = express.Router();
const populateController = require('../Controllers/populateController');

router.get('/api/populate', populateController.populateData);

module.exports = router;