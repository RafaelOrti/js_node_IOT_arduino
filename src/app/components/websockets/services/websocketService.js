// Servicio para realizar la lógica de negocio relacionada con los websockets
const websocketService = {
  // Enviar un mensaje a todos los clientes conectados
  sendMessageToClients: (io, message) => {
    io.emit('message', message);
  },

  // Enviar un mensaje a un cliente específico por su ID
  sendMessageToClientById: (io, clientId, message) => {
    io.to(clientId).emit('message', message);
  },
};

module.exports = websocketService;
