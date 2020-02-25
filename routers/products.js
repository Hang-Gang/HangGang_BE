const router = require('express').Router()
const db = require('../data/dbConfig')

router.get('/', (req, res) => {
    db('products').then(response => {
        res.status(200).json(response)
    })
})

module.exports = router 