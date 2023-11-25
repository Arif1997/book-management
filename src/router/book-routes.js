//book routes
const express = require('express');
const bookController = require('../controller/book-controller');
const router = express.Router();

// Define book routes
router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBookById);
router.post('/insert', bookController.insertBook)
router.delete('delete/:id', bookController.deleteBook);
router.put('/update/:id', bookController.updateBook);

module.exports = router;
