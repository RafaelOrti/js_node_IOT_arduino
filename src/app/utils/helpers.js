// Función para generar un número aleatorio entre un rango dado
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para convertir una cadena a mayúsculas
const capitalizeString = (str) => {
  return str.toUpperCase();
}

// Función para obtener la fecha y hora actual en formato legible
const getCurrentDateTime = () => {
  const now = new Date();
  return now.toLocaleString();
}

// Exportar las funciones para su uso en otros módulos
module.exports = {
  getRandomNumber,
  capitalizeString,
  getCurrentDateTime
};
