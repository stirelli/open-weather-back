const express = require('express')
const router = express.Router()

const { getForecast } = require('../controllers/forecast')

router.get('/', getForecast)

module.exports = router
