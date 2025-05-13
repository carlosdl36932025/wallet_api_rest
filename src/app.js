const express = require('express');
const bodyParser = require('body-parser');
const { initializeSoapClient } = require('./config/soap');

const app = express();

app.use(bodyParser.json());

app.use(async (req, res, next) => {
  try {
    await initializeSoapClient();
    next();
  } catch (err) {
    console.error('SOAP initialization failed:', err);
    res.status(503).json({
      success: false,
      cod_error: '98',
      message_error: 'Service temporarily unavailable'
    });
  }
});


app.use('/api/clients', require('./routes/client.routes'));
app.use('/api/wallet', require('./routes/wallet.routes'));
app.use('/api/transactions', require('./routes/transaction.routes'));

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    cod_error: '99',
    message_error: 'Internal server error'
  });
});

module.exports = app;