const express = require('express');
const booksController = require('../controllers/booksController');
const router = express.Router();

router.get('/', booksController.findAllBooks);
router.get('/:id', booksController.findBookById);
router.post('/', booksController.addBook);
router.put('/:id', booksController.updateBook);
router.delete('/:id', booksController.deleteBookById);

module.exports = router;
