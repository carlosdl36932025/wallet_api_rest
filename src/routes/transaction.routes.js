const express = require('express');
const router = express.Router();
const TransactionController = require('../controllers/transaction.controller');

router.post('/initiate-payment', TransactionController.initiatePayment);
router.post('/confirm-payment', TransactionController.confirmPayment);

module.exports = router;