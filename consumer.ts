import { Kafka } from 'kafkajs';

const clientId = 'clientId';

const brokers = ['localhost:9092']

const topic = 'message';

const kafka = new Kafka({ clientId, brokers });

const consumer = kafka.consumer({ groupId: clientId });

const consume = async () => {
	await consumer.connect();
	await consumer.subscribe({ topic });
	await consumer.run({
		eachMessage: async ({ message }) => {
			const buffer = message.value;
			console.log(`mensagem recebida: ${buffer.toString()}`);
		},
	});
};

export default consume;
