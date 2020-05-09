const mongoose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/mood-diary'

mongoose.connect(connectionURL, { 
    useNewUrlParser: true, 
    useCreateIndex: true
})

const Schema = mongoose.Schema

const QuestionSchema = new Schema ({
    question: {
        type: String,
        required: true
    }, 
    options: [String]
})

module.exports.Question = mongoose.model('Question', QuestionSchema)
