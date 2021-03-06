'use strict'

var express = require('express')
var mainController = require('../controllers/main_controller')
var multipart = require('connect-multiparty')
var md_upload = multipart()

var router = express.Router()

router.post('/converter', md_upload, mainController.converterImage)

module.exports = router