//Database operations

const { PrismaClient } = require("@prisma/client");

//Instance of prisma
const prisma = new PrismaClient();

//Insert an author
const saveAuthor = async (author) =>{
try {
    const inserted_author = await prisma.author.create({
        data: author
    });
    return inserted_author
} catch (error) {
    return error;
}
}

//Insert an author
const saveBook = async (book) =>{
    try {
        const inserted_book = await prisma.book.create({
            data: book
        });
        return inserted_book
    } catch (error) {
        return error;
    }
    }

//get the author by id
const fetchAuthorById = async (author_id) =>{
    try {
        const author = await prisma.author.findFirst({
            where: {
                id: parseInt(author_id),
            }
        })
        return author;
    } catch (error) {
        return error;
    }
}

//get the book by id
const fetchBookById = async (book_id) =>{
    try {
        const book = await prisma.book.findFirst({
            where: {
                id: parseInt(book_id),
            }
        })
        return book;
    } catch (error) {
        return error;
    }
}

//gets the list of authors
const fetchAuthors = async () => {
    try {
        const authors = await prisma.author.findMany();
        return authors;
    } catch (error) {
        return error;
    }
};

//gets the list of books
const fetchBooks = async () => {
    try {
        const books = await prisma.book.findMany();
        return books;
    } catch (error) {
        return error;
    }
};

// delete the author by id
const deleteAuthorById = async (author_id) =>{
    try {
       const deleted_author = await prisma.author.delete({
            where: {
                id: parseInt(author_id),
            }
        })
        return deleted_author;
    } catch (error) {
        return error;
    }
}

// delete the book by id 
const deleteBookById = async (book_id) =>{
    try {
       const deleted_book = await prisma.book.delete({
            where: {
                id: parseInt(book_id),
            }
        })
        return deleted_book;
    } catch (error) {
        return error
    }
}

const updateAuthorById = async (author_id, updated_data) =>{
    try {
        const updated_author = await prisma.author.update({
            where: {
                id: parseInt(author_id),
            },
            data: updated_data,
        })

    return updated_author;
    } catch (error) {
        return error
    }
}

const updateBookById = async (book_id, updated_data) =>{
    try {
        const updated_book = await prisma.book.update({
            where: {
                id: parseInt(book_id),
            },
            data: updated_data,
        })

    return updated_book;
    } catch (error) {
        return error
    }
}


module.exports = { db : {
    fetchAuthors, fetchBooks, deleteAuthorById , deleteBookById, fetchAuthorById, fetchBookById, saveAuthor, saveBook, updateBookById, updateAuthorById
}};