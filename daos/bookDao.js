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
        technologies: bookData.technologies,
        description: bookData.description,
        budget: bookData.budget,
        contact_email: bookData.contact_email
    };
    return Book.update(updatedBook, { where: { id: id } });
}
module.exports = bookDao;