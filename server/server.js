const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')

server.use(express.json())
server.use(cors())
server.use(helmet())

server.get('/', (req, res) => {
    res.status(200).send("We Are Live")
})

module.exports = server