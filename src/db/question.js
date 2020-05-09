const mongoose = require('./database')

const Schema = mongoose.Schema

const QuestionSchema = new Schema ({
    question: {
        type: String,
        required: true
    }, 
    options: [String]
})

module.exports.Question = mongoose.model('Question', QuestionSchema)
