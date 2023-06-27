const mongoose = require('mongoose');

// Configuración y conexión con la base de datos
const connectToDatabase = () => {
  mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
  db.once('open', () => {
    console.log('Conexión a la base de datos establecida');
  });
};

module.exports = connectToDatabase;
