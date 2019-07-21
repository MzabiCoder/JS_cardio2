const express = require('express')
const router = express.Router()
const validURL = require('valid-url')
const shorid = require('shortid')
const config = require('config')


const URlE = require('../models/URL')

//@route POST

router.post('/shorten', (req, res) => {
    const {
        longUrl
    } = req.body

    const baseUrl = config.ger = t('baseUrl')

    if (!validURL.isUri(baseUrl)) {
        return res.status(401).json({
            message: 'Invalid base URL'
        })
    }

    const urlCode = shortid.generate()

    //if (validURL.isUri(longUrl))
})



module.exports = router