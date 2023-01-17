const Kafka = require('node-rdkafka');

let msg=''

let consumer = new Kafka.KafkaConsumer({

    'group.id': 'kafka',
    'metadata.broker.list': 'kafka:9092',

}, {});


consumer.connect();

    consumer.on('ready', function() {
            
            console.log('consumer ready..')
            consumer.subscribe(['dados']);
            consumer.consume();
        
    }).on('data', function(data) {

        msg=data.value
        console.log(`received message: ${data.value}`)
            
});

module.exports=msg
        
     








