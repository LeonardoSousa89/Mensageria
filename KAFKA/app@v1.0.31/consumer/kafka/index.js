const express = require('express')
const server  = express.Router()

const Kafka = require('node-rdkafka');

var consumer = new Kafka.KafkaConsumer({

    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092',

}, {});

consumer.connect();

server.get('/').get((req, res)=>{

        consumer.on('ready', function() {
            
            console.log('consumer ready..')
            consumer.subscribe(['dados']);
            consumer.consume();
        
        }).on('data', function(data) {
        
            console.log(`received message: ${data.value}`);
            
        });
        
        return res.status(200).json(data.value)

})

module.exports = server




