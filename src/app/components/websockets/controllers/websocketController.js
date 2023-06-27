// Controlador para manejar las acciones relacionadas con los websockets
const websocketController = (io) => {
  // Evento de conexión de un cliente al socket
  io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado:', socket.id);

    // Evento para recibir un mensaje del cliente
    socket.on('message', (data) => {
      console.log('Mensaje recibido:', data);

      // Enviar el mensaje a todos los clientes conectados
      io.emit('message', data);
    });

    // Evento de desconexión de un cliente del socket
    socket.on('disconnect', () => {
      console.log('Cliente desconectado:', socket.id);
    });
  });
};

module.exports = websocketController;
