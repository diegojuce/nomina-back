const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API nómina funcionando');
});

app.listen(PORT, () => {
  console.log(`Server escuchando en puerto ${PORT}`);
});