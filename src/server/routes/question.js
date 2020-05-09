const express = require('express')
const router = express.Router()

const quentionController = require('../../controllers/question')

router.route('/question')
    .post(quentionController.createQuestion)

module.exports = router