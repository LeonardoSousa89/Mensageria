const { sendMsg, getMsg }=require('../interface/methods.js')
const knex=require('../repository/db.js')


let sendMessage=(req, res)=>{

   return sendMsg(knex, req, res)

}


let  getMessage=(res)=>{

    return getMsg(knex, res)
        
}


module.exports={ sendMessage, getMessage }


