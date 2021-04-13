const express = require('express')
const helmet = require('helmet')
const server = express()


//ROUTES


server.use(helmet())
server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json('Node db2 project server is up and running! 😇')
})

module.exports = server

