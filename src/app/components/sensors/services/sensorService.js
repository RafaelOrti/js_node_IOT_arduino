const SensorModel = require('../models/sensorModel');

// Servicio para realizar la lógica de negocio relacionada con los sensores
const sensorService = {
  // Obtener todos los sensores
  getAllSensors: async () => {
    try {
      const sensors = await SensorModel.find();
      return sensors;
    } catch (error) {
      throw new Error('Error al obtener los sensores');
    }
  },

  // Obtener un sensor por su ID
  getSensorById: async (sensorId) => {
    try {
      const sensor = await SensorModel.findById(sensorId);
      return sensor;
    } catch (error) {
      throw new Error('Error al obtener el sensor');
    }
  },

  // Crear un nuevo sensor
  createSensor: async (name, type, description) => {
    try {
      const newSensor = await SensorModel.create({ name, type, description });
      return newSensor;
    } catch (error) {
      throw new Error('Error al crear el sensor');
    }
  },

  // Actualizar un sensor existente
  updateSensor: async (sensorId, name, type, description) => {
    try {
      const updatedSensor = await SensorModel.findByIdAndUpdate(
        sensorId,
        { name, type, description },
        { new: true }
      );
      return updatedSensor;
    } catch (error) {
      throw new Error('Error al actualizar el sensor');
    }
  },

  // Eliminar un sensor existente
  deleteSensor: async (sensorId) => {
    try {
      const deletedSensor = await SensorModel.findByIdAndDelete(sensorId);
      return deletedSensor;
    } catch (error) {
      throw new Error('Error al eliminar el sensor');
    }
  },
};

module.exports = sensorService;
