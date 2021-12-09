const express = require('express')
const router = express.Router()

const sitesRouter = require('./sites')
router.use('/sites',sitesRouter)

module.exports = router