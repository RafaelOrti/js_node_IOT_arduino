#include <WiFi.h>
#include <PubSubClient.h>

// Información de conexión WiFi
const char* ssid = "nombre_de_red_wifi";
const char* password = "contraseña_de_red_wifi";

// Información de conexión MQTT
const char* mqttServer = "dirección_servidor_mqtt";
const int mqttPort = 1883;
const char* mqttUsername = "usuario_mqtt";
const char* mqttPassword = "contraseña_mqtt";

// Cliente WiFi y Cliente MQTT
WiFiClient wifiClient;
PubSubClient mqttClient(wifiClient);

// Función de callback para procesar mensajes MQTT recibidos
void mqttCallback(char* topic, byte* payload, unsigned int length) {
  // Procesar el payload del mensaje recibido
  // ...

  // Ejemplo de publicación de un mensaje de respuesta
  mqttClient.publish("respuesta_tema", "Mensaje recibido correctamente");
}

// Función para configurar y establecer la conexión WiFi
void setupWiFi() {
  Serial.begin(9600);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Conectando a la red WiFi...");
  }

  Serial.println("Conexión WiFi establecida");
  Serial.print("Dirección IP asignada: ");
  Serial.println(WiFi.localIP());
}

// Función para configurar y establecer la conexión MQTT
void setupMQTT() {
  mqttClient.setServer(mqttServer, mqttPort);
  mqttClient.setCallback(mqttCallback);

  while (!mqttClient.connected()) {
    Serial.println("Conectando al servidor MQTT...");

    if (mqttClient.connect("arduinoClient", mqttUsername, mqttPassword)) {
      Serial.println("Conexión MQTT establecida");

      // Suscribirse a un tema MQTT
