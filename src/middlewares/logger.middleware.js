// 

const fs = require('fs');
const path = require('path');

const logDirectory = path.join(process.cwd(), 'logs');

// Vérifie si le dossier logs existe, sinon le crée
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const logFilePath = path.join(logDirectory, 'app.log');

const logger = (req, res, next) => {
  const logMessage = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}\n`;

  // Écrit le log dans le fichier (ajoute à la fin)
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) console.error('Erreur lors de l’écriture du log :', err);
  });

  // Optionnel : affiche aussi dans la console
  console.log(logMessage.trim());

  next(); // passe au middleware ou route suivant
};

module.exports = logger;
