const SensorModel = require('../models/sensorModel');
const SensorService = require('../services/sensorService');

// Controlador para manejar las acciones relacionadas con los sensores
const sensorController = {
  // Obtener todos los sensores
  getAllSensors: async (req, res) => {
    try {
      const sensors = await SensorService.getAllSensors();
      return res.json(sensors);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener los sensores' });
    }
  },

  // Obtener un sensor por su ID
  getSensorById: async (req, res) => {
    const { id } = req.params;
    try {
      const sensor = await SensorService.getSensorById(id);
      if (!sensor) {
        return res.status(404).json({ error: 'Sensor no encontrado' });
      }
      return res.json(sensor);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener el sensor' });
    }
  },

  // Crear un nuevo sensor
  createSensor: async (req, res) => {
    const { name, type, description } = req.body;
    try {
      const newSensor = await SensorService.createSensor(name, type, description);
      return res.status(201).json(newSensor);
    } catch (error) {
      return res.status(500).json({ error: 'Error al crear el sensor' });
    }
  },

  // Actualizar un sensor existente
  updateSensor: async (req, res) => {
    const { id } = req.params;
    const { name, type, description } = req.body;
    try {
      const updatedSensor = await SensorService.updateSensor(id, name, type, description);
      if (!updatedSensor) {
        return res.status(404).json({ error: 'Sensor no encontrado' });
      }
      return res.json(updatedSensor);
    } catch (error) {
      return res.status(500).json({ error: 'Error al actualizar el sensor' });
    }
  },

  // Eliminar un sensor existente
  deleteSensor: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedSensor = await SensorService.deleteSensor(id);
      if (!deletedSensor) {
        return res.status(404).json({ error: 'Sensor no encontrado' });
      }
      return res.json({ message: 'Sensor eliminado correctamente' });
    } catch (error) {
      return res.status(500).json({ error: 'Error al eliminar el sensor' });
    }
  },
};

module.exports = sensorController;
