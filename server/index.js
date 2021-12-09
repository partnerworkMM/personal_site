const express = require('express')
const server = express()
const morgan = require('morgan')
const path = require('path')
const apiRouter = require('./api')
const {client} = require('./db')
const {PORT = 4000} = process.env

client.connect()

server.use(express.json())
server.use(morgan.json())

server.use('/',express.static(path.join(__dirname, '../build')))

server.use('/api',apiRouter)

//error handling
server.use((err,req,res,next)=>{
    let status = err.status || 500
    res.status(status).json({
        error: 'an error has occurred: ' + err.message,
        status,
    })
})

//for GET routes that are not in /api, rely on ReactRouter to handle
server.get('*',(req,res,next)=>{
    res.sendFile(path.join(__dirname, 'build','index.js'))
})

//404 handler
server.use('*',(req,res,next)=>{
    res.status(404).send('Invalid Request. Try again.')
})

server.listen(PORT, () => console.log(`Starter server on port: ${PORT}`))