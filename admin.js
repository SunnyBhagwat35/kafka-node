const { kafka } = require("./client");
// const { Kafka } =  require("kafkajs");

// const kafka = new Kafka({
//     clientId: "my-kafka-app",
//     brokers: ['192.168.0.110:9092'],
// });
async function init() {
  console.log(kafka.brokers)
  const admin = kafka.admin();
  console.log("Admin connecting...");
  admin.connect();
  console.log("Admin Connected...");

  console.log("Creating Topic [rider-updates]");

  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });

  console.log("Topic Created Success [rider-updates]");

  console.log("Disconnecting Admin..");
  await admin.disconnect();
}

init();