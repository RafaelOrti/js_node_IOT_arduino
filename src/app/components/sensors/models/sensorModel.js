const mongoose = require('mongoose');

// Definición del esquema del modelo de Sensor
const sensorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Crear el modelo de Sensor basado en el esquema
const SensorModel = mongoose.model('Sensor', sensorSchema);

module.exports = SensorModel;
