const { Request } = require('../models')

module.exports = {
  create(req, res) {
    return Request
      .create({
        title: req.body.title,
        author: req.body.author,
        pages: req.body.pages,
        publication_date: req.body.publication_date
      })
      .then(request => res.status(201).send(request))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return Request
      .findAll()
      .then(requests => res.status(200).send(requests))
      .catch(error => res.status(400).send(error))
  },
  retrieve(req, res) {
    return Request
      .findById(req.params.requestId)
      .then(request => {
        if (!request) {
          return res.status(404).send({
            message: 'Request Not Found'
          })
        }
        return res.status(200).send(request)
      })
      .catch(error => res.status(400).send(error))
  },
  update(req, res) {
  return Request
    .findById(req.params.requestId)
    .then(request => {
      if (!request) {
        return res.status(404).send({
          message: 'Request Not Found'
        })
      }
      return request
        .update({
          accepted: req.body.accepted || request.accepted,
        })
        .then(() => res.status(200).send(request))
        .catch((error) => res.status(400).send(error))
    })
    .catch((error) => res.status(400).send(error))
  },
  destroy(req, res) {
  return Request
    .findById(req.params.requestId)
    .then(request => {
      if (!request) {
        return res.status(404).send({
          message: 'Request Not Found'
        })
      }
      return request
        .destroy()
        .then(() => res.status(200).send({ message: "Request deleted successfully"}))
        .catch(error => res.status(400).send(error))
    })
    .catch(error => res.status(400).send(error))
  }
}
