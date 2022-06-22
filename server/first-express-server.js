const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.get('/', (req, res) => {
  //   res.send('<h1>HOME | Bicycles</h1>');
  res.sendFile('./views/index.html', { root: __dirname });
});
app.get('/about', (req, res) => {
  //   res.send('<h1>ABOUT | Bicycles</h1>');
  res.sendFile('./views/about.html', { root: __dirname });
});

// redirect
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});
