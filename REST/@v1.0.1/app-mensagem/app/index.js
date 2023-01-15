require('dotenv').config()

const { security }=require('./config/security/cross-origin-police/cors.js')

const log=require('morgan')
const server=require('./routes/routes.js')
const express=require('express')
const app=express()

app.use(log('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', security) 
app.use('/', server) 

app.listen(process.env.HOST_PORT, ()=>{
    console.log(`online : port ${process.env.HOST_PORT}`)
})