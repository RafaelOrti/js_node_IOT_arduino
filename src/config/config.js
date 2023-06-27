// Configuración global del proyecto

const config = {
  development: {
    // Configuración para el entorno de desarrollo
    server: {
      port: 3000,
      host: 'localhost'
    },
    database: {
      host: 'localhost',
      port: 27017,
      name: 'mydatabase',
      username: 'admin',
      password: 'admin123'
    },
    mqtt: {
      server: 'mqtt://localhost',
      port: 1883,
      username: 'mqttuser',
      password: 'mqttpassword'
    }
  },
  production: {
    // Configuración para el entorno de producción
    server: {
      port: process.env.PORT,
      host: 'mydomain.com'
    },
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      name: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    mqtt: {
      server: process.env.MQTT_SERVER,
      port: process.env.MQTT_PORT,
      username: process.env.MQTT_USERNAME,
      password: process.env.MQTT_PASSWORD
    }
  }
};

module.exports = config;
