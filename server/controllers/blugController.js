const Blog = require('../models/blog');

const blogIndex = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      // res.send(result);
      res.render('blugs/index', { title: 'All Blurgs', blogs: result });
    })
    .catch((err) => {
      res.status(404).render('404', { title: 'Blurg not found ):' });
    });
};

const blogDetails = (req, res) => {
  const { id } = req.params;
  Blog.findById(id)
    .then((result) => {
      res.render('blugs/single-blog', { title: 'Single Blurg', blog: result });
    })
    .catch((err) => {
      res.status(404).render('404', { title: 'Blurg not found ):' });
    });
};

const blogCreateGet = (req, res) => {
  res.render('blugs/create', { title: 'Create a new Blurg' });
};

const blogCreatePost = (req, res) => {
  const blug = new Blog(req.body);

  blug
    .save()
    .then((result) => {
      res.redirect('/blugs');
    })
    .catch((err) => {
      console.log(err);
    });
};

const blogDelete = (req, res) => {
  const { id } = req.params;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/blugs' });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  blogIndex,
  blogDetails,
  blogCreateGet,
  blogCreatePost,
  blogDelete,
};
