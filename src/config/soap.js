const soap = require('soap');
const { SOAP_WSDL_URL } = process.env;

let soapClient;

async function initializeSoapClient() {
  return new Promise((resolve, reject) => {
    soap.createClient(SOAP_WSDL_URL, (err, client) => {
      if (err) return reject(err);
      soapClient = client;
      resolve();
    });
  });
}

function getSoapClient() {
  if (!soapClient) throw new Error('SOAP client not initialized');
  return soapClient;
}

module.exports = { initializeSoapClient, getSoapClient };