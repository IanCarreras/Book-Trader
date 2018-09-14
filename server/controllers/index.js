const users = require('./user_controller')
const books = require('./book_controller')
const requests = require('./request_controller')
const user_book = require('./user_book_controller')

module.exports = {
  users,
  books,
  requests,
  user_book
}
