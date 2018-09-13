const { book: bookController } = require('../controllers')
const { request: requestController } = require('../controllers')
const { user: userController } = require('../controllers')

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Book Trading Club'
  }))

  app.post('/api/books', bookController.add)
  app.get('/api/books', bookController.list)
  app.get('/api/books/:bookId', bookController.retrieve)
  app.put('/api/books/:bookId', bookController.update)
  app.delete('/api/books/:bookId', bookController.destroy)

  app.post('/api/request', requestController.create)
  app.get('/api/request', requestController.list)
  app.get('/api/request/:requestId', requestController.retrieve)
  app.put('/api/request/:requestId', requestController.update)
  app.delete('/api/request/:requestId', requestController.destroy)

  app.post('/api/users', userController.add)
  app.get('/api/users', userController.list)
  app.get('/api/users/:userId', userController.retrieve)
  app.put('/api/users/:userId', userController.update)
  app.delete('/api/users/:userId', userController.destroy)
}
