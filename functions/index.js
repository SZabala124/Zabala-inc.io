const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Función de prueba básica con manejo de errores
exports.helloWorld = onRequest((req, res) => {
  try {
    logger.info("Hello World function executed", {structuredData: true});
    res.send("Hello from Firebase Functions!");
  } catch (error) {
    logger.error("Error in helloWorld function:", error);
    res.status(500).send("Something went wrong");
  }
});

// Tu función original con manejo de errores
exports.yourFunction = onRequest((req, res) => {
  try {
    logger.info("Function executed", {structuredData: true});
    res.send("Hello from Firebase!");
  } catch (error) {
    logger.error("Error in yourFunction:", error);
    res.status(500).send("Something went wrong");
  }
});
