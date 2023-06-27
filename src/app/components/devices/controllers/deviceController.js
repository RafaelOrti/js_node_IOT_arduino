const DeviceModel = require('../models/deviceModel');
const DeviceService = require('../services/deviceService');

// Controlador para manejar las acciones relacionadas con los dispositivos
const deviceController = {
  // Obtener todos los dispositivos
  getAllDevices: async (req, res) => {
    try {
      const devices = await DeviceService.getAllDevices();
      return res.json(devices);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener los dispositivos' });
    }
  },

  // Obtener un dispositivo por su ID
  getDeviceById: async (req, res) => {
    const { id } = req.params;
    try {
      const device = await DeviceService.getDeviceById(id);
      if (!device) {
        return res.status(404).json({ error: 'Dispositivo no encontrado' });
      }
      return res.json(device);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener el dispositivo' });
    }
  },

  // Crear un nuevo dispositivo
  createDevice: async (req, res) => {
    const { name, type, description } = req.body;
    try {
      const newDevice = await DeviceService.createDevice(name, type, description);
      return res.status(201).json(newDevice);
    } catch (error) {
      return res.status(500).json({ error: 'Error al crear el dispositivo' });
    }
  },

  // Actualizar un dispositivo existente
  updateDevice: async (req, res) => {
    const { id } = req.params;
    const { name, type, description } = req.body;
    try {
      const updatedDevice = await DeviceService.updateDevice(id, name, type, description);
      if (!updatedDevice) {
        return res.status(404).json({ error: 'Dispositivo no encontrado' });
      }
      return res.json(updatedDevice);
    } catch (error) {
      return res.status(500).json({ error: 'Error al actualizar el dispositivo' });
    }
  },

  // Eliminar un dispositivo existente
  deleteDevice: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedDevice = await DeviceService.deleteDevice(id);
      if (!deletedDevice) {
        return res.status(404).json({ error: 'Dispositivo no encontrado' });
      }
      return res.json({ message: 'Dispositivo eliminado correctamente' });
    } catch (error) {
      return res.status(500).json({ error: 'Error al eliminar el dispositivo' });
    }
  },
};

module.exports = deviceController;
