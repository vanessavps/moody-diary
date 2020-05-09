const { Question } = require('../db/question')

const create = function (req, res) {
    const question = new Question(req.body)

    question.save().then(() => {
        res.json(question)
    }).catch((error) => {
        console.log(error);
    })
}

const getById = function (req, res) {
    let id = req.params.question_id

    Question.findOne({ '_id': id }).exec().then((question) => {
        res.json(question)
    }).catch((error) => {
        console.log(error)
    })
}

const getAll = function (req, res) {
    Question.find().exec().then((question) => {
        res.json(question)
    }).catch((error) => {
        console.log(error)
    })
}

const update = function (req, res) {
    const question = new Question(req.body)
    const id = question._id

    Question.updateOne({ '_id': id }, question).exec().then((result) => {
        res.json(result.nModified + " question was updated")
    }).catch((error) => {
        console.log(error)
    })
}

const deleteQuestion = function (req, res) {
    let id = req.params.question_id

    Question.deleteOne({ '_id': id }).exec().then((result) => {
        res.json(result.deletedCount + " question was deleted")
    }).catch((error) => {
        console.log(error)
    })
}

module.exports = {
    create,
    update,
    getById,
    getAll,
    deleteQuestion
}

