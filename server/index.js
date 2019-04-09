const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

// serve up static file
app.use(express.static('public'));
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});