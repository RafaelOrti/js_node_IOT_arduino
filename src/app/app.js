const express = require('express');
const app = express();

// Importar rutas
const deviceRoutes = require('./src/components/devices/routes');
const sensorRoutes = require('./src/components/sensors/routes');
const websocketRoutes = require('./src/components/websockets/routes');

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Rutas
app.use('/devices', deviceRoutes);
app.use('/sensors', sensorRoutes);
app.use('/websockets', websocketRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API del proyecto!');
});

// Manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Ocurrió un error en el servidor');
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
