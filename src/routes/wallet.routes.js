const express = require('express');
const router = express.Router();
const WalletController = require('../controllers/wallet.controller');

router.post('/recharge', WalletController.recharge);
router.post('/balance', WalletController.checkBalance);

module.exports = router;