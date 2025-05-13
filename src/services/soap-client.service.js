const { getSoapClient } = require('../config/soap');

class SoapClientService {
  static async callSoapMethod(methodName, args) {
    const client = getSoapClient();
    return new Promise((resolve, reject) => {
      client[methodName](args, (err, result) => {
        if (err) {
          console.error(`SOAP Error in ${methodName}:`, err);
          return reject(err);
        }
        resolve(result);
      });
    });
  }

  static async registerClient(data) {
    return this.callSoapMethod('registerClient', data);
  }

  static async rechargeWallet(data) {
    return this.callSoapMethod('rechargeWallet', data);
  }

  static async checkBalance(data) {
    return this.callSoapMethod('checkBalance', data);
  }

  static async initiatePayment(data) {
    return this.callSoapMethod('initiatePayment', data);
  }

  static async confirmPayment(data) {
    return this.callSoapMethod('confirmPayment', data);
  }
}

module.exports = SoapClientService;