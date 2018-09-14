const { User_Book} = require('../models')

module.exports = {
  add(req, res) {
    return User_Book
      .create({
        user_id: req.body.user_id,
        book_id: req.body.book_id,
        parent_user_book_id: req.body.parent_user_book_id
      })
      .then(user_book => res.status(201).send(user_book))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return User_Book
      .findAll()
      .then(user_books => res.status(200).send(user_books))
      .catch(error => res.status(400).send(error))
  },
  retrieve(req, res) {
    return User_Book
      .findById(req.params.user_bookId)
      .then(user_book => {
        if (!user_book) {
          return res.status(404).send({
            message: 'User_Book Not Found'
          })
        }
        return res.status(200).send(user_book)
      })
      .catch(error => res.status(400).send(error))
  },
  update(req, res) {
  return User_Book
    .findById(req.params.user_bookId)
    .then(user_book => {
      if (!user_book) {
        return res.status(404).send({
          message: 'User_Book Not Found'
        })
      }
      return user_book
        .update({
          user_id: req.body.user_id || user_book.user_id,
          book_id: req.body.book_id || user_book.book_id,
          parent_user_book_id: req.body.parent_user_book_id || user_book.parent_user_book_id
        })
        .then(() => res.status(200).send(user_book))
        .catch((error) => res.status(400).send(error))
    })
    .catch((error) => res.status(400).send(error))
  },
  destroy(req, res) {
  return User_Book
    .findById(req.params.user_bookId)
    .then(user_book => {
      if (!user_book) {
        return res.status(404).send({
          message: 'User_Book Not Found'
        })
      }
      return user_book
        .destroy()
        .then(() => res.status(200).send({ message: "User_Book deleted successfully"}))
        .catch(error => res.status(400).send(error))
    })
    .catch(error => res.status(400).send(error))
  }
}
