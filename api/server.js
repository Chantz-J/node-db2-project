const express = require('express')
const helmet = require('helmet')
const server = express()


//ROUTES
const CarsRouter = require('./cars/cars-router')

server.use(helmet())
server.use(express.json())
server.use('/api/cars', CarsRouter)

server.get('/api', (req, res) => {
    res.status(200).json(`Welcome to the Cars API! Get started by accessing this endpoint: /api/cars/ `)
})

server.get('/', (req, res) => {
    res.status(200).json('Node db2 project server is up and running! 😇')
})

module.exports = server

