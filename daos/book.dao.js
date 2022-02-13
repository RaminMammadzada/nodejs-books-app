const { Book } = require("../db/models/index");

var bookDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateBook: updateBook
}

function findAll() {
    return Book.findAll();
}

function findById(id) {
    return Book.findByPk(id);
}

function deleteById(id) {
    return Book.destroy({ where: { id: id } });
}

function create(bookData) {
    var newBook = new Book(bookData);
    return newBook.save();
}

function updateBook(bookData, id) {
    var updatedBook = {
        title: bookData.title,
        etag: bookData.etag,
        technologies: bookData.publishedYear,
        author: bookData.author
    };
    return Book.update(updatedBook, { where: { id: id } });
}
module.exports = bookDao;