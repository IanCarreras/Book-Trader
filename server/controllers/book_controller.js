const { Book } = require('../models')

module.exports = {
  create(req, res) {
    return Book
      .create({
        title: req.body.title,
        author: req.body.author,
        pages: req.body.pages,
        publication_date: req.body.publication_date
      })
      .then(book => res.status(201).send(book))
      .catch(error => res.status(400).send(error))
  }
}
