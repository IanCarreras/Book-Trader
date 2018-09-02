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
}
