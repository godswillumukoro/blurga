const express = require('express');
const blogController = require('../controllers/blugController');

const router = express.Router();

router.get('/create', blogController.blogCreateGet);

router.get('/', blogController.blogIndex);

router.get('/:id', blogController.blogDetails);

router.post('/', blogController.blogCreatePost);

router.delete('/:id', blogController.blogDelete);

module.exports = router;
