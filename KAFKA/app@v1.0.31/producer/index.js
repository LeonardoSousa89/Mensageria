const port = 8766

const producer = require('./kafka')

const express = require('express')
const app     = express()

app.use('/', producer)

app.listen(port)