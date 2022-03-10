import { Kafka } from 'kafkajs';

const clientId = 'clientId';

const brokers = ['localhost:9092']

const topic = 'message';

const kafka = new Kafka({ clientId, brokers });

const producer = kafka.producer();

const produce = async () => {
	await producer.connect();
	let i = 0;
	setInterval(async () => {
		i++;
		try {
			await producer.send({
				topic,
				messages: [
					{
						key: String(i),
						value: `a mensagem é ${i}`
					}
				]
			})
		} catch (error) {
			console.error(error);	
		}
	}, 1000);
};

export default produce;
