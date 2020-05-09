const express = require('express')
const hbs = require('hbs')
const path = require('path')
const bodyParser = require('body-parser')
const questionRouter = require('./routes/question')

const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(bodyParser.json())
app.use('/api',questionRouter)

app.get('', (req, res) => {
    res.render('index', {
        title: 'Mood Diary'
    })
})


app.listen(port, () => {
    console.log('Server running on port ' + port)
})