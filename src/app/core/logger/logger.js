// Configuración del sistema de registro de eventos
const logger = {
  // Registrar un mensaje de información
  info: (message) => {
    console.log(`[INFO] ${message}`);
  },

  // Registrar un mensaje de advertencia
  warn: (message) => {
    console.log(`[WARNING] ${message}`);
  },

  // Registrar un mensaje de error
  error: (message) => {
    console.log(`[ERROR] ${message}`);
  },
};

module.exports = logger;
