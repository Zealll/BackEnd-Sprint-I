const express = require('express')
const server = express()
const cors = require('cors')
const projectRouter = require('./data/helpers/project-router')
const actionRouter = require('./data/helpers/action-router')

server.use(express.json())
server.use(cors())

server.use('/api/projects', projectRouter)
server.use('/api/actions', actionRouter)


server.get('/', (req, res) => {
    res.send(`
    <h1>Welcome to Elan's Project!</h1>
    `)
})

module.exports = server