const port = 8766


const producer=require('./kafka')
const express = require('express')
const app     = express()


app.get('/',(req, res)=>{
    res.status(200).json({msg: 'producer'})
})


app.listen(port, ()=>{

    console.log(producer)

})