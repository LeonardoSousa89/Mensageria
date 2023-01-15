const Kafka = require('node-rdkafka');

var stream = Kafka.Producer.createWriteStream({

  'metadata.broker.list': 'localhost:9092'
    
}, {}, {

    topic: 'dados'

});

function queuedSuccess(){

  const success = stream.write(Buffer.from('Awesome message'));

  if (success) {
    console.log('We queued our message!');
  } else {
    console.log('Too many messages in our queue already');
  }

} 


stream.on('error', (err) => {

    console.error('Error in our kafka stream');
    console.error(err);
    
});

setInterval(() => {
  queuedSuccess()
},9000)