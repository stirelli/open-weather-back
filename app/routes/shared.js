const express = require('express')
const router = express.Router()

const { getShared } = require('../controllers/shared')

router.get('/', getShared)

module.exports = router
