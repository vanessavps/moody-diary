const mongoose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/mood-diary'

mongoose.connect(connectionURL, { 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
})

module.exports = mongoose