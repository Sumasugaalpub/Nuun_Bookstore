const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Define routes for handling books
router.post("/upload-book", bookController.uploadBook);
router.get("/all-books", bookController.getAllBooks);
router.patch("/book/:id", bookController.updateBook);
router.delete("/book/:id", bookController.deleteBook);
router.get("/book/:id", bookController.getBookById);

module.exports = router;
