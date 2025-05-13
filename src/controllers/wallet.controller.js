const SoapClientService = require('../services/soap-client.service');

class WalletController {
  static async recharge(req, res) {
    try {
      const { document, celular, amount } = req.body;
      
      const soapResponse = await SoapClientService.rechargeWallet({
        document,
        celular,
        amount: parseFloat(amount)
      });

      return res.status(soapResponse.success ? 200 : 400).json(soapResponse);
    } catch (error) {
      console.error('Error in wallet recharge:', error);
      return res.status(500).json({
        success: false,
        cod_error: '99',
        message_error: 'Internal server error'
      });
    }
  }

  static async checkBalance(req, res) {
    try {
      const { document, celular } = req.body;
      
      const soapResponse = await SoapClientService.checkBalance({
        document,
        celular
      });

      return res.status(soapResponse.success ? 200 : 400).json(soapResponse);
    } catch (error) {
      console.error('Error checking balance:', error);
      return res.status(500).json({
        success: false,
        cod_error: '99',
        message_error: 'Internal server error'
      });
    }
  }
}

module.exports = WalletController;