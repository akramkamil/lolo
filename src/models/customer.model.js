let mongoose = require('mongoose')

//mongoose.connect('mongod"mongodb+srv://akram:ALzohiri28@shopping-8wn4q.mongodb.net/test?retryWrites=true&w=majority"b://localhost:27017/proj', {useNewUrlParser: true})

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
    } 
})


module.exports = mongoose.model("Customer", CustomerSchema)