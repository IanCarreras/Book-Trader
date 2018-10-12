const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const http = require('http')
const cors = require('cors')

const app = express()

app.use(logger('dev'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

require('./server/routes')(app);

const port = parseInt(process.env.PORT, 10) || 8000
app.set('port', port)

const server = http.createServer(app)
server.listen(port)
console.log('server running on port ', port)

module.exports = app
