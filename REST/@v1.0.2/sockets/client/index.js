const port=8766

const URL='http://127.0.0.1:8767/mensagem'

const axios=require('axios')
const url=axios.default.get(URL)

const net=require('net')

const readline=require('readline')

const client=new net.Socket()

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

client.connect(8766, '127.0.0.1', ()=>{
    
    console.log(`connection begin : port ${port}`)
   
    Ajax()

    rl.addListener('line', line=>{
        client.write(line)
        client.push(Ajax())
    })

})

const Ajax=()=>{

    url.then(res=>{

        if(res.status === 200){
            console.log('OK')
        }
        
    }).catch(e=>console.log(e))

}


