const net=require('net')

const server=net.createServer(function handleConnection(){
    console.log('se conectou ao servidor')
})

server.listen(8766, '127.0.0.1')