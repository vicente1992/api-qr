const Util = require("../utils/util");
const util = new Util();
const QrServices = require("../services/qr-services");
class QrController {

  static async createQr(req, res) {
    const { url } = req.body;
    if (!url) {
      util.setError(200, 'Por favor complete la información');
      return util.send(res);
    }
    try {
      const qr = await QrServices.createQr(url);
      util.setSuccess(201, 'Qr creado éxitosamente', qr);
      return util.send(res);
    } catch (error) {
      util.setError(200, error);
      return util.send(res);
    }

  }

}



module.exports = QrController;