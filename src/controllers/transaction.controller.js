const SoapClientService = require('../services/soap-client.service');

class TransactionController {
  static async initiatePayment(req, res) {
    try {
      const { document, celular, amount } = req.body;
      
      const soapResponse = await SoapClientService.initiatePayment({
        document,
        celular,
        amount: parseFloat(amount)
      });

      if (soapResponse.success && process.env.NODE_ENV === 'development') {
        console.log(`Token: ${soapResponse.data.token}`);
      }

      return res.status(soapResponse.success ? 200 : 400).json(soapResponse);
    } catch (error) {
      console.error('Error initiating payment:', error);
      return res.status(500).json({
        success: false,
        cod_error: '99',
        message_error: 'Internal server error'
      });
    }
  }

  static async confirmPayment(req, res) {
    try {
      const { sessionId, token } = req.body;
      
      const soapResponse = await SoapClientService.confirmPayment({
        sessionId,
        token
      });

      return res.status(soapResponse.success ? 200 : 400).json(soapResponse);
    } catch (error) {
      console.error('Error confirming payment:', error);
      return res.status(500).json({
        success: false,
        cod_error: '99',
        message_error: 'Internal server error'
      });
    }
  }
}

module.exports = TransactionController;