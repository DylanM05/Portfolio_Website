const express = require('express');
const router = express.Router();
const contactController = require('../Controllers/contactController');


router.post('/sendtext', contactController.sendText);

module.exports = router;