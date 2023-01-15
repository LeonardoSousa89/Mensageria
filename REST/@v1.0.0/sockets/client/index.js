const net=require('net')
const readline=require('readline')

const client=new net.Socket()

client.connect(8766, '127.0.0.1', ()=>{
    console.log('conectou via cliente')
})

