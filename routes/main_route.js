'use strict'

var express = require('express')
var mainController = require('../controllers/main_controller')
var multipart = require('connect-multiparty')
var md_upload = multipart({ uploadDir: './temp_file' })

var router = express.Router()

router.post('/converter', md_upload, mainController.converterImage)
    // router.get('/me', authController.me)
    // router.put('/update_password/:id', authController.updatePass)

module.exports = router