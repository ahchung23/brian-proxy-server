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



// video carousel
const videoCarouselOptions = {
  target: 'http:localhost:3333',
  changeOrigin: true
};
const videoCarouselProxy = proxy(videoCarouselOptions);
app.use('/associatedVideos', videoCarouselProxy);


const castCrewOptions = {
  target: 'http:localhost:2002'
};
const castCrewProxy = proxy(castCrewOptions);
app.use('/actors', castCrewProxy);


const movieInfoOptions = {
  target: 'http:localhost:2000'
};
const movieInfoProxy = proxy(movieInfoOptions);
app.use('/movies', movieInfoProxy);