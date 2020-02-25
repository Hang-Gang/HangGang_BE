const router = require('express').Router()
const db = require('../data/dbConfig.js')

router.get('/', (req, res) => {
    db('user').then(response => {
        res.status(200).json(response)
    })
})

module.exports = router