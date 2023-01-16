const port = 8767

const consumer = require('./kafka')

const express = require('express')
const app     = express()

app.use('/', consumer)

app.listen(port)
