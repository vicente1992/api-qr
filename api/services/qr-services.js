
const QRCode = require('qrcode')
const opts = {
  errorCorrectionLevel: 'H',
  quality: 0.3,
  margin: 1.5,
  width: 350,
  color: {
    dark: '#000000ff',
    light: '#ffffffff'
  }
}
class QrServices {
  static async createQr(url) {
    try {
      const qr = await QRCode.toDataURL(url, opts);
      return qr;
    } catch (error) {
      return error;
    }
  }

}


module.exports = QrServices;