const Book = require('../models/bookModel');

// Controller logic for handling books
exports.uploadBook = async (req, res) => {
  const data = req.body;
  try {
    const result = await Book.create(data);
    res.send(result);
  } catch (error) {
    console.error('Error uploading book:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

exports.getAllBooks = async (req, res) => {
  let query = {};
  if (req.query?.category) {
    query = { category: req.query.category };
  }
  try {
    const result = await Book.find(query);
    res.send(result);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

exports.updateBook = async (req, res) => {
  const id = req.params.id;
  const updateBookData = req.body;
  try {
    const result = await Book.findByIdAndUpdate(id, updateBookData, { new: true });
    res.send(result);
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

exports.deleteBook = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Book.findByIdAndDelete(id);
    res.send(result);
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

exports.getBookById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Book.findById(id);
    res.send(result);
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};
