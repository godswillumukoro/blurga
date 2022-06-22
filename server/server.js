const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();
const dbURI = 'mongodb://127.0.0.1:27017/node-netninja';
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
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
  res.render('about', { title: 'About Bluger' });
});
app.get('/create-blug', (req, res) => {
  res.render('create', { title: 'Create a new Blug' });
});

app.post('/blug', (req, res) => {
  const blug = new Blog(req.body);

  blug
    .save()
    .then((result) => {
      res.redirect('/blugs');
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/blug/:id', (req, res) => {
  const { id } = req.params;
  Blog.findById(id)
    .then((result) => {
      res.render('single-blog', { title: 'Single Blug', blog: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/blugs', (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      // res.send(result);
      res.render('index', { title: 'All Blugs', blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

// 404
app.use((req, res) => {
  res.status(404).render('404');
});
