const swaggerJsdoc = require("swagger-jsdoc");
// swagger definition
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
  apis: ["./src/routes/*.js"], // less fichiers de routes
};
// Crée un objet JSON représentant toute la documentation de mon API, prête à être utilisée par Swagger UI
const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
