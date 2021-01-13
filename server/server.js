const express = require('express');
const ConnectDB = require('./config/db');
const app = express();

ConnectDB();

app.get('/', (req, res) => {
  res.send('API running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
