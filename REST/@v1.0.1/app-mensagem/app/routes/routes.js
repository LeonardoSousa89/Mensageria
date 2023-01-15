const { sendMSG, getMSG }=require('../controller/msg.js')

const express=require('express')
const server=express.Router()


server.route('/mensagem').get((req, res)=>{

    return getMSG(res)    

}).post((req, res)=>{
    
    return sendMSG(req, res)

})

module.exports=server