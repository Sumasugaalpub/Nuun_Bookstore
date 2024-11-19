const mongoose = require('mongoose');

// Define the book schema
const bookSchema = new mongoose.Schema({
  bookTitle: String,
  authorName: String,
  imageURL: String,
  category: String,
  bookDescription: String,
  bookPDFURL: String,
  // Add other fields as needed
});

// Create the Book model
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
