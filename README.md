- src
  - components
    - devices
      - controllers
        - deviceController.js     // Controlador para manejar las acciones relacionadas con los dispositivos
      - models
        - deviceModel.js          // Modelo para definir la estructura de los dispositivos
      - services
        - deviceService.js        // Servicio para realizar la lógica de negocio relacionada con los dispositivos
    - sensors
      - controllers
        - sensorController.js     // Controlador para manejar las acciones relacionadas con los sensores
      - models
        - sensorModel.js          // Modelo para definir la estructura de los sensores
      - services
        - sensorService.js        // Servicio para realizar la lógica de negocio relacionada con los sensores
    - websockets
      - controllers
        - websocketController.js  // Controlador para manejar las acciones relacionadas con los websockets
      - services
        - websocketService.js     // Servicio para realizar la lógica de negocio relacionada con los websockets
    - ...
  - core
    - arduino
      - controllers
        - arduinoController.js    // Controlador para interactuar con Arduino
      - services
        - arduinoService.js       // Servicio para realizar la lógica de negocio relacionada con Arduino
    - database
      - database.js               // Configuración y conexión con la base de datos
    - mqtt
      - mqtt.js                   // Configuración y conexión con el servidor MQTT
    - logger
      - logger.js                 // Configuración del sistema de registro de eventos
    - ...
  - utils
    - helpers.js                 // Funciones de ayuda y utilidades generales
    - validators.js              // Funciones de validación de datos
    - ...
  - app.js                       // Archivo principal del servidor
- config
  - env
    - development.env            // Variables de entorno para el entorno de desarrollo
    - production.env             // Variables de entorno para el entorno de producción
    - ...
  - config.js                    // Configuración global del proyecto
- tests
  - devices
    - device.test.js             // Pruebas unitarias para los dispositivos
  - sensors
    - sensor.test.js             // Pruebas unitarias para los sensores
  - ...
- arduino
  - src
    - main.ino                   // Código principal para Arduino
  - libraries
    - ...                        // Bibliotecas y dependencias de Arduino
  - platformio.ini               // Configuración de PlatformIO para el proyecto de Arduino
- docs
  - architecture.md              // Documentación de la arquitectura del proyecto
  - api-specification.md         // Documentación de la especificación de la API
  - deployment.md                // Documentación para el despliegue del proyecto
- public
  - css                          // Estilos CSS
  - js                           // Scripts JavaScript
  - ...
- package.json                  // Archivo de configuración de Node.js y dependencias del proyecto
- README.md                     // Documentación general del proyecto
