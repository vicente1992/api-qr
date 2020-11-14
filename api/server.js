require('dotenv').config();
const express = require('express')
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.use('/api/v1/qr', require('./routes/qr.routes'));


app.get('**', (req, res) => res.json({ message: 'Welcome api QR' }))
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo el puerto ${process.env.PORT}`)
});