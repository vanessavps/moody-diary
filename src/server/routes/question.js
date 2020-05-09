const express = require('express')
const router = express.Router()

const questionController = require('../../controllers/question')

router.route('/question')
    .post(questionController.create)
    .get(questionController.getAll)
    .put(questionController.update)

router.route('/question/:question_id')
    .get(questionController.getById)
    .delete(questionController.deleteQuestion)

module.exports = router