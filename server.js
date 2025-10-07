const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

// Connexion à MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Route test
app.get("/", (req, res) => {
  res.send("🚀 API E-Market fonctionne !");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`⚡ Serveur démarré sur le port ${PORT}`));
