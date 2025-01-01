import { Kafka } from "kafkajs";
 
const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["my-cluster-kafka-bootstrap.kafka:9092"],
  sasl: {
    mechanism: "scram-sha-512",
    username: "my-connect-user",
    password: "eWKhGtJJ16Fo9svPInU8Osw99zEZ44wt",
  },
});
 
const producer = kafka.producer();
 
const data = new Array(1).fill({
  value: "jhdcdvfdhvjfhbvfdbjhvdfbhvjhbfd",
});
 
await producer.connect();
 
await producer.send({
  topic: "testak",
  messages: data,
});
 
await producer.disconnect();