const express = require('express')
const server  = express.Router()

const Kafka = require('node-rdkafka');

const stream = Kafka.Producer.createWriteStream({

  'metadata.broker.list': 'localhost:9092'
}, 

  {}, 

{

    topic: 'dados'

});


server.get('/').get((req, res)=>{

      function queueMessage(){

        const success = stream.write(Buffer.from('Awesome message'));
      
        if (success) {
          console.log('We queued our message!');
        } else {
          console.log('Too many messages in our queue already');
        }
      
      } 
      
      
      setInterval(() => {
      
        queueMessage()
      
      },3000)

      res.status(200).json(success)

})

module.exports = server
