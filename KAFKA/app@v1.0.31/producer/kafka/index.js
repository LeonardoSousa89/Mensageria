const Kafka = require('node-rdkafka');


const stream = Kafka.Producer.createWriteStream({

  'metadata.broker.list': 'kafka:9092'
}, 

  {}, 

{

    topic: 'dados'

});


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



module.exports=stream

