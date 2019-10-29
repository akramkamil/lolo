let CustomerModel = require('../models/customer.model')
let express = require('express')
let router = express.Router()

router.post('/person', (req, res) => {

    if (!req.body) {
        return res.status(400).send('Requset body is missing')
    }
    let model = new CustomerModel({
        name: req.body.name,
        email:req.body.email
    })
    model.save()
        .then(doc => {
            if (!doc || doc.length === 0) {
                return res.status(400).send(doc)
            }
            res.status(201).send(req.body)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router