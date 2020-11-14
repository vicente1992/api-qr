const { Router } = require('express');
const QrController = require('../controller/qrController');

const router = Router();

router.post('/createQr', QrController.createQr);

module.exports = router;