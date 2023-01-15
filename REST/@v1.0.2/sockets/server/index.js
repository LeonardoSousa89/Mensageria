const port=8766

const net=require('net')

const server=net.createServer(function handleConnection(socket){
    console.log(`connection begin on server : port ${port}`)

    socket.on('data',(data)=>{
        let str=data.toString()

        if(str === 'end'){
            socket.end()
        }

        console.log(str)

    })
})

server.listen(port, '127.0.0.1')