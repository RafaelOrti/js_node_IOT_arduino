const DeviceModel = require('../models/deviceModel');

// Servicio para realizar la lógica de negocio relacionada con los dispositivos
const deviceService = {
  // Obtener todos los dispositivos
  getAllDevices: async () => {
    try {
      const devices = await DeviceModel.find();
      return devices;
    } catch (error) {
      throw new Error('Error al obtener los dispositivos');
    }
  },

  // Obtener un dispositivo por su ID
  getDeviceById: async (deviceId) => {
    try {
      const device = await DeviceModel.findById(deviceId);
      return device;
    } catch (error) {
      throw new Error('Error al obtener el dispositivo');
    }
  },

  // Crear un nuevo dispositivo
  createDevice: async (name, type, description) => {
    try {
      const newDevice = await DeviceModel.create({ name, type, description });
      return newDevice;
    } catch (error) {
      throw new Error('Error al crear el dispositivo');
    }
  },

  // Actualizar un dispositivo existente
  updateDevice: async (deviceId, name, type, description) => {
    try {
      const updatedDevice = await DeviceModel.findByIdAndUpdate(
        deviceId,
        { name, type, description },
        { new: true }
      );
      return updatedDevice;
    } catch (error) {
      throw new Error('Error al actualizar el dispositivo');
    }
  },

  // Eliminar un dispositivo existente
  deleteDevice: async (deviceId) => {
    try {
      const deletedDevice = await DeviceModel.findByIdAndDelete(deviceId);
      return deletedDevice;
    } catch (error) {
      throw new Error('Error al eliminar el dispositivo');
    }
  },
};

module.exports = deviceService;
