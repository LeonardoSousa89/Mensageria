const port = 8766

const server = require('./kafka')

const express = require('express')
const app     = express()

app.use('/', server)

app.listen(port)