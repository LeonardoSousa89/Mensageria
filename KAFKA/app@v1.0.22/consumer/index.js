const Kafka = require('node-rdkafka');

var consumer = new Kafka.KafkaConsumer({

    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092',

}, {});

consumer.connect();

consumer.on('ready', function() {
    
    console.log('consumer ready..')

    consumer.subscribe(['dados']);

    consumer.consume();

}).on('data', function(data) {

    console.log(data.value);

});




