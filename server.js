const express = require("express");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./documentation/swagger"); 
const connectDB = require("./config/db");

// Importer routes
const productRoutes = require("./src/routes/product.routes");
const userRoutes = require("./src/routes/user.routes");
const categoryRoutes = require("./src/routes/categories.routes");

// Importer middlewares
const logger = require("./src/middlewares/logger.middleware");
const notFound = require("./src/middlewares/notFound.middleware");
const errorHandler = require("./src/middlewares/errorHandler.middleware");

const app = express();

// Middleware global pour parser JSON
app.use(express.json());

// Middleware logger
app.use(logger);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Routes
app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);

// Middleware 404
// app.use(notFound);

// Middleware gestion des erreurs
// app.use(errorHandler);

// Connexion DB et lancement serveur
connectDB().then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Serveur démarré sur le port ${PORT}`);
    });
});
