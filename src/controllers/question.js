const {Question} = require('../db/question')

module.exports.createQuestion = function (req, res) {
    const question = new Question(req.body)
    console.log(question)
    
    question.save().then(() => {
        console.log('Ok!')
        res.json(question)
    }).catch((error) => {
        console.log('Deu ruim!')
        console.log(error);
    })
}

