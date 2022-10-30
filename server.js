const express = require('express');
const mongoose = require('mongoose');
const blugRoutes = require('./routes/blugRoutes');
require('dotenv').config();

const app = express();
// $PORT= 5000
// $DATABASE_URL = mongodb+srv://dang:yNyhex2BozJPiut1@cluster0.q8fh9.mongodb.net/blurga?retryWrites=true&w=majority
// const dbURI = 'mongodb://127.0.0.1:27017/node-netninja';
const dbURI = 'process.env.DATABASE_URL';
mongoose
  .connect(process.env.DATABASE_URL)
  .then((result) => app.listen(process.env.PORT))
  .catch((err) => console.log(err));

app.set('view engine', 'ejs');

// static files
app.use(express.static('./views/assets'));
app.use(express.urlencoded({ extended: true })); // for accepting form data

// routes
app.get('/', (req, res) => {
  res.redirect('/blugs');
});
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Blurger' });
});

app.use('/blugs', blugRoutes);

// 404
app.use((req, res) => {
  res
    .status(404)
    .render('404', { title: 'sorry, this page does not exist ):' });
});
