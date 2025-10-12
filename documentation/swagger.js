const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-Market API",
      version: "1.0.0",
      description: "Documentation de l'API E-Market",
    },
    servers: [{ url: "http://localhost:5000" }],
  },
  apis: ["./src/routes/*.js"], // tes fichiers de routes
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
