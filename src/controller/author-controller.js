// Author controller that caries business logic

const { db } = require("../db");

//Calls fetchAuthors function to get Authors data
const getAuthors = async (req, res) => {
    try {
      const authors = await db.fetchAuthors();
      res.status(200).json({authors: authors});
    } catch (error) {
      res.status(500).json({ error: 'Error fetching authors' });
    }
  }

// Gets Author By id
const getAuthorById = async (req, res) => {

    const {id} = req.params;
    try {
      const author = await db.fetchAuthorById(id);
      res.status(200).json({author: author});
    } catch (error) {
      res.status(500).json({ error: 'Error fetching author' });
    }
  }

const insertAuthor = async (req, res) =>{
    const author = req.body;
    try {
      const inserted_author = await db.saveAuthor(author);
      res.status(200).send({inserted_author})
    } catch (error) {
      res.status(500).json({ error: 'Error inserting author' });
    }
  }

const deleteAuthor = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedAuthor = db.deleteAuthorById(id)
  
      if (!deletedAuthor) {
        return res.status(404).json({ error: 'Author not found' });
      }
  
      res.status(200).json({ message: 'Author deleted successfully', deletedAuthor });
    } catch (error) {
      console.error('Error deleting author:', error);
      res.status(500).json({ error: 'Error deleting author' });
    }
  }

const updateAuthor = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
  
    try {
      const updatedAuthor = await db.updateAuthorById(id, updatedData);
      res.status(200).send(updatedAuthor);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error updating author');
    }
  };

module.exports = {getAuthors, getAuthorById, insertAuthor, deleteAuthor, updateAuthor};