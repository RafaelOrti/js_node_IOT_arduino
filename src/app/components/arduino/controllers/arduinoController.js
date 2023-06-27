const WiFi = require('wifi');
const PubSubClient = require('pubsubclient');

// Información de conexión WiFi
const ssid = "nombre_de_red_wifi";
const password = "contraseña_de_red_wifi";

// Información de conexión MQTT
const mqttServer = "dirección_servidor_mqtt";
const mqttPort = 1883;
const mqttUsername = "usuario_mqtt";
const mqttPassword = "contraseña_mqtt";

// Cliente WiFi y Cliente MQTT
const wifiClient = new WiFiClient();
const mqttClient = new PubSubClient(wifiClient);

// Función para establecer la conexión WiFi
const connectToWiFi = () => {
  console.log("Conectando a la red WiFi...");
  
  WiFi.begin(ssid, password);

  while (WiFi.status() !== WL_CONNECTED) {
    delay(1000);
    console.log(".");
  }
  
  console.log("");
  console.log("Conexión WiFi establecida");
  console.log("Dirección IP asignada: " + WiFi.localIP());
}

// Función para configurar la conexión MQTT
const setupMQTT = () => {
  mqttClient.setServer(mqttServer, mqttPort);
  mqttClient.setCallback(mqttCallback);
}

// Función para establecer la conexión MQTT
const connectToMQTT = () => {
  while (!mqttClient.connected()) {
    console.log("Conectando al servidor MQTT...");
    
    if (mqttClient.connect("arduinoClient", mqttUsername, mqttPassword)) {
      console.log("Conexión MQTT establecida");
      
      // Suscribirse a un tema MQTT
      mqttClient.subscribe("mi_tema");
    } else {
      console.log("Error al conectar al servidor MQTT. Código de error: " + mqttClient.state() + ". Intentando nuevamente en 5 segundos...");
      
      delay(5000);
    }
  }
}

// Función para procesar mensajes MQTT recibidos
const mqttCallback = (topic, payload, length) => {
  console.log("Mensaje recibido en el tema: " + topic);

  // Procesar el payload del mensaje recibido
  // ...

  // Ejemplo de publicación de un mensaje de respuesta
  mqttClient.publish("respuesta_tema", "Mensaje recibido correctamente");
}

// Función para enviar un mensaje MQTT
const sendMQTTMessage = (topic, message) => {
  mqttClient.publish(topic, message);
}

// Función para realizar acciones específicas del Arduino
const performArduinoActions = () => {
  // Realizar acciones según la lógica específica del Arduino
  // ...
}

const setup = () => {
  console.log("Starting Arduino...");

  connectToWiFi();
  setupMQTT();
  connectToMQTT();
}

const loop = () => {
  if (!mqttClient.connected()) {
    connectToMQTT();
  }

  mqttClient.loop();
  performArduinoActions();

  // Otras tareas y lógica del Arduino
  // ...
}

setup();
setInterval(loop, 1000);




// const SerialPort = require('serialport');

// // Configuración del puerto serie
// const port = new SerialPort('/dev/ttyACM0', {
//   baudRate: 9600,
// });

// // Función para enviar comandos a Arduino
// const sendCommandToArduino = (command) => {
//   port.write(`${command}\n`);
// };

// // Escucha los datos recibidos desde Arduino
// port.on('data', (data) => {
//   const receivedData = data.toString().trim();
//   console.log(`Dato recibido desde Arduino: ${receivedData}`);
//   // Lógica para procesar los datos recibidos desde Arduino
//   // ...
// });

// module.exports = {
//   sendCommandToArduino,
// };