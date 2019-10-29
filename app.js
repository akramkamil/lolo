let express = require('express')
let app = express()
let bodyparser = require('body-parser')

let mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);

let personRoute = require('./src/router/person')
let customerRoute = require('./src/router/customer')

const db = require('./config/keys').mongoURI
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("mongoose Conected"))
    .catch(err => console.log(err))

app.use(bodyparser.json())
app.use((req, res, next) => {
    console.log(`${new Date().toString()} =>${req.originalUrl}`, req.body)
    next()
})
app.use(express.static('public'))
app.use(personRoute)
app.use(customerRoute)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`server has start on ${PORT}`))