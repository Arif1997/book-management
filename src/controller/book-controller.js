//Business logic for books

const { db } = require("../db");

const getBooks = async (req, res) => {
    try {
      const books = await db.fetchBooks();
      res.status(200).json({books : books});
    } catch (error) {
      res.status(500).json({ error: 'Error fetching authors' });
    }
  }

const getBookById = async (req, res) => {
    const {id} = req.params;
    try {
      const book = await db.fetchBookById(id);
      res.status(200).json({book: book});
    } catch (error) {
      res.status(500).json({ error: 'Error fetching book' });
    }
  }

const insertBook = async (req, res) =>{
    const book = req.body;
    try {
      const inserted_book = await db.saveBook(book);
      res.status(200).send({inserted_book})
    } catch (error) {
      console.log(error)
      res.status(500).send({error: error})
    }
  }

  const deleteBook = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedBook = db.deleteBookById(id)
  
      if (!deletedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
  
      res.status(200).json({ message: 'Book deleted successfully', deletedBook });
    } catch (error) {
      console.error('Error deleting book:', error);
      res.status(500).json({ error: 'Error deleting book' });
    }
  }

  const updateBook = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
  
    try {
      const updatedBook = await db.updateBookById(id, updatedData);
      if (!updatedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.status(200).send({updatedBook: updatedBook});
    } catch (error) {
      console.error(error);
      res.status(500).send('Error updating book');
    }
  };

  module.exports = {getBooks, getBookById, insertBook, deleteBook, updateBook}