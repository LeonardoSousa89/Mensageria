const port = 8767


const consumer=require('./kafka')
const express = require('express')
const app     = express()


app.get('/',(req, res)=>{
    res.status(200).json({msg: 'consumer'})
})


app.listen(port, ()=>{

    console.log(consumer)

})
