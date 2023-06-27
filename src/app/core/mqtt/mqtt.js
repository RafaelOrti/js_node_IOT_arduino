const mqtt = require('mqtt');

// Configuración y conexión con el servidor MQTT
const connectToMQTTServer = () => {
  const client = mqtt.connect('mqtt://broker.example.com', {
    clientId: 'my-client-id',
    username: 'my-username',
    password: 'my-password',
  });

  client.on('connect', () => {
    console.log('Conexión establecida con el servidor MQTT');
    // Suscribirse a los temas MQTT necesarios
    client.subscribe('my/topic1');
    client.subscribe('my/topic2');
    // ...
  });

  client.on('message', (topic, message) => {
    console.log(`Mensaje recibido en el tema ${topic}: ${message.toString()}`);
    // Lógica para procesar el mensaje MQTT recibido
    // ...
  });

  client.on('error', (error) => {
    console.error('Error en la conexión con el servidor MQTT:', error);
  });

  return client;
};

module.exports = connectToMQTTServer;

