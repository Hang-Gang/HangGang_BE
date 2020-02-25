require('dotenv').config()

const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')

server.use(express.json())
server.use(cors())
server.use(helmet())

const userRouter = require('../routers/user')
server.use('/api/user', userRouter)

const productsRouter = require('../routers/products')
server.use('/api/products', productsRouter)


server.get('/', (req, res) => {
    res.status(200).send("You are connected")
})

module.exports = server