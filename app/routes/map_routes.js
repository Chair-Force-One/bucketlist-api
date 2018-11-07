'use strict'

const express = require('express')

const router = express.Router()

const dotenv = require('dotenv')
dotenv.config()

// INDEX
// GET /adventures
router.get('/maps', (req, res) => {
  res.status(200).json({key: process.env.GOOGLE_MAP_API_KEY})
})

module.exports = router
