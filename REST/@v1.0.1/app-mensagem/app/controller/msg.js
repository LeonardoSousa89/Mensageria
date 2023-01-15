const { sendMessage, getMessage }=require('../services/msg.js')


let sendMSG=(req, res)=>{

    return sendMessage(req, res)

}


let getMSG=(res)=>{

    return getMessage(res)

}


module.exports={ sendMSG, getMSG }



