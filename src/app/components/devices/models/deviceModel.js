const mongoose = require('mongoose');

// Definición del esquema del modelo de Device
const deviceSchema = new mongoose.Schema({
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

// Crear el modelo de Device basado en el esquema
const DeviceModel = mongoose.model('Device', deviceSchema);

module.exports = DeviceModel;
