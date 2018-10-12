const { books } = require('../models')

module.exports = {
  add(req, res) {
    return books
      .create({
        title: req.body.title,
        author: req.body.author,
        pages: req.body.pages,
        publication_date: req.body.publication_date
      })
      .then(book => res.status(201).send(book))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return books
      .findAll()
      .then(books => res.status(200).send(books))
      .catch(error => res.status(400).send(error))
  },
  retrieve(req, res) {
    return books
      .findById(req.params.bookId)
      .then(book => {
        if (!book) {
          return res.status(404).send({
            message: 'Book Not Found'
          })
        }
        return res.status(200).send(book)
      })
      .catch(error => res.status(400).send(error))
  },
  update(req, res) {
    return books
      .findById(req.params.bookId)
      .then(book => {
        if (!book) {
          return res.status(404).send({
            message: 'Book Not Found'
          })
        }
        return book
      .update({
        title: req.body.title || book.title,
        author: req.body.author || book.author,
        pages: req.body.pages || book.pages,
        publication_date: req.body.publication_date || book.publication_date
      })
      .then(() => res.status(200).send(book))
      .catch((error) => res.status(400).send(error))
    })
    .catch((error) => res.status(400).send(error))
  },
  destroy(req, res) {
  return Book
    .findById(req.params.bookId)
    .then(book => {
      if (!book) {
        return res.status(404).send({
          message: 'Book Not Found'
        })
      }
      return book
        .destroy()
        .then(() => res.status(200).send({ message: "Book deleted successfully"}))
        .catch(error => res.status(400).send(error))
    })
    .catch(error => res.status(400).send(error))
  }
}
