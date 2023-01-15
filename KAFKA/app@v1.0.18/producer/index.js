const Kafka = require('node-rdkafka');

var stream = Kafka.Producer.createWriteStream({

    'metadata.broker.list': 'localhost:9092'
    
}, {}, {

    topic: 'dados'

});

var queuedSuccess = stream.write(Buffer.from('Awesome message'));

if (queuedSuccess) {

  console.log('We queued our message!');

} else {

  console.log('Too many messages in our queue already');

}

stream.on('error', (err) => {

    console.error('Error in our kafka stream');
    console.error(err);
    
});