let data={}

let sendMsg=async(knex, req, res)=>{

    data={ ...req.body }

    await knex.insert(data)
              .from('mensagem')
              .then( _=>res.status(201).json({msg: "mensagem enviada"}))
              .catch(_=>res.status(400).json({msg: "houve um erro ao tentar enviar os dados"}))

}


let getMsg=async(knex, res)=>{

    await knex.select('*')
              .from('mensagem')
              .then(body=>{
            
                if(body<=0 || !body) return res.status(404).json({msg: "dados não encontrados"})
            
                return res.status(200).json(body)

             })
             .catch(_=>res.status(500).json({msg: "houve um erro com o servidor"}))

}


module.exports={ sendMsg, getMsg }