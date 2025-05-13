require('dotenv').config();
const app = require('./app');
const { initializeSoapClient } = require('./config/soap');
const PORT = process.env.PORT || 3000;

initializeSoapClient()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`API REST Gateway running on port ${PORT}`);
      console.log(`SOAP Service: ${process.env.SOAP_WSDL_URL}`);
    });
  })
  .catch((err) => {
    console.error('Failed to initialize SOAP client:', err);
    process.exit(1);
  });