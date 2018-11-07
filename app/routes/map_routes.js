// Express docs: http://expressjs.com/en/api.html
const express = require('express')

// pull in Mongoose model for adventures
// const Adventure = require('../models/adventure')

// we'll use this to intercept any errors that get thrown and send them
// back to the client with the appropriate status code
const handle = require('../../lib/error_handler')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
// const customErrors = require('../../lib/custom_errors')

const loadGoogleMapsApi = require('load-google-maps-api')

// we'll use this function to send 404 when non-existant document is requested
// const handle404 = customErrors.handle404

// instantiate a router (mini app that only handles routes)
const router = express.Router()

const dotenv = require('dotenv')
dotenv.config()
const initOptions = process.env.GOOGLE_MAP_API_KEY
// INDEX
// GET /adventures
router.get('/maps', (req, res) => {
  loadGoogleMapsApi(initOptions)
    .then(map => res.status(200).json({ map: map }))
    .catch(err => handle(err, res))
})

module.exports = router
