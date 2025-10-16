const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    // Tentative de connexion à MongoDB avec l'URL stockée dans le fichier .env
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      // pour que mongosse utilise le nouveau moteur unifié de gestion des connexions au cluster
      useUnifiedTopology: true,
    });
    console.log("MongoDB connecté !");
  } catch (error) {
    console.error("Erreur MongoDB :", error.message);
    // Fermeture du processus en cas d'erreur
    process.exit(1);
  }
};

module.exports = connectDB;
