const SoapClientService = require('../services/soap-client.service');

class ClientController {
  static async register(req, res) {
    try {
      const { document, names, email, celular } = req.body;
      
      const soapResponse = await SoapClientService.registerClient({
        document,
        names,
        email,
        celular
      });

      return res.status(soapResponse.success ? 201 : 400).json(soapResponse);
    } catch (error) {
      console.error('Error in client registration:', error);
      return res.status(500).json({
        success: false,
        cod_error: '99',
        message_error: 'Internal server error'
      });
    }
  }
}

module.exports = ClientController;