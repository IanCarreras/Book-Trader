const { User } = require('../models')

module.exports = {
  create(req, res) {
    return User
      .create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        city: req.body.city,
        state: req.body.state
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return User
      .findAll()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error))
  },
  retrieve(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found'
          })
        }
        return res.status(200).send(user)
      })
      .catch(error => res.status(400).send(error))
  },
  update(req, res) {
  return User
    .findById(req.params.userId)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User Not Found'
        })
      }
      return user
        .update({
          city: req.body.city || user.city,
          state: req.body.state || user.state
        })
        .then(() => res.status(200).send(user))
        .catch((error) => res.status(400).send(error))
    })
    .catch((error) => res.status(400).send(error))
  },
  destroy(req, res) {
  return User
    .findById(req.params.userId)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User Not Found'
        })
      }
      return user
        .destroy()
        .then(() => res.status(200).send({ message: "User deleted successfully"}))
        .catch(error => res.status(400).send(error))
    })
    .catch(error => res.status(400).send(error))
  }
}
