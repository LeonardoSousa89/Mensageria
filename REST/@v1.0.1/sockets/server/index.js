const port=8766
const URL='http://127.0.0.1:8767/mensagem'

const axios=require('axios')
const net=require('net')

const url=axios.default.get(URL)

const Ajax=()=>{

    url.then(res=>{

        if(res.status === 200){
            console.log('OK')
        }
        
    }).catch(e=>console.log(e))

}

const server=net.createServer(function handleConnection(socket){
    console.log(`connection begin on server : port ${port}`)
    Ajax()

    socket.on('end',function(){
        console.log('client connection lost')
    })

})

server.listen(port, '127.0.0.1')