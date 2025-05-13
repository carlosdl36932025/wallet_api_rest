const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/client.controller');

router.post('/register', ClientController.register);

module.exports = router;