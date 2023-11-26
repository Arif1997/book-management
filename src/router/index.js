const express = require('express');
const authorRoutes = require('./author-routes');
const bookRoutes = require('./book-routes');

const router = express.Router();

router.use('/author', authorRoutes);
router.use('/book', bookRoutes);

module.exports = router;
