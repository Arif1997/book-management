//author routes
const express = require('express');
const authorController = require('../controller/author-controller');
const router = express.Router();


router.get('/', authorController.getAuthors);
router.get('/:id', authorController.getAuthorById);
router.post('/insert', authorController.insertAuthor)
router.delete('/delete/:id', authorController.deleteAuthor);
router.put('/update/:id', authorController.updateAuthor);


module.exports = router;
