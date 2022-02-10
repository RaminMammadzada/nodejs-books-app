const bookDao = require("../daos/bookDao");

var bookController = {
    addBook: addBook,
    findAllBooks: findAllBooks,
    findBookById: findBookById,
    updateBook: updateBook,
    deleteBookById: deleteBookById
}

function addBook(req, res) {
    let book = req.body;
    bookDao.create(book)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findBookById(req, res) {
    bookDao.findById(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteBookById(req, res) {
    bookDao.deleteById(req.params.id)
        .then((data) => {
            res.status(200).json({
                message: "Book deleted successfully",
                book: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateBook(req, res) {
    bookDao.updateBook(req.body, req.params.id)
        .then((data) => {
            res.status(200).json({
                message: "Book updated successfully",
                book: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAllBooks(req, res) {
    bookDao.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = bookController;