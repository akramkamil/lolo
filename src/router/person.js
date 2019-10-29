let express = require('express')
let router = express.Router()
let CustomerModel = require('../models/customer.model')

router.get('/person', (req, res) => {
    CustomerModel.find()
        .then(CustomerModel => res.json(CustomerModel))
        .catch(() => console.log(err))

    // if(req.query.name){
    //     res.send(`have reauested a person ${req.query.name}`)
    // }else{
    //     res.send('have reauested')
    // }
})


router.get('/person/:name', (req, res) => {
    res.send(`you have reauested a person ${req.params.name}`)
})


module.exports = router