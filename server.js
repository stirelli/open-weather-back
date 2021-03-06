require('dotenv').config({ silent: process.env.NODE_ENV === 'production' })
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const compression = require('compression')
const cors = require('cors')
const app = express()
const initMongo = require('./config/mongo')

app.set('port', process.env.PORT || 3000)

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(
  bodyParser.json({
    limit: '20mb'
  })
)
app.use(
  bodyParser.urlencoded({
    limit: '20mb',
    extended: true
  })
)

app.use(cors())
app.use(compression())
app.use(require('./app/routes'))
app.listen(app.get('port'))

initMongo()

module.exports = app
