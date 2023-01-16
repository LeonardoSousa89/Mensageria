const port = 8767

const server = require('./kafka')

const express = require('express')
const app     = express()

app.use('/', server)

app.listen(port)
