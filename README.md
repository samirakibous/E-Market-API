# E-Market API

## Contexte
API backend pour une plateforme e-commerce, permettant de gérer les **produits** et les **utilisateurs**.  
Objectif : serveur Express stable et modulaire, connecté à MongoDB, avec documentation Swagger.

---

## Technologies
- Node.js, Express.js
- MongoDB + Mongoose
- Dotenv
- Swagger/OpenAPI

---

## Installation
git clone <URL_DU_REPO>
cd E-Market-API
npm install
Créer .env :
PORT=5000
MONGO_URI=<votre_URI_MongoDB>
Lancer le serveur :

npm start
Accès à Swagger : http://localhost:5000/api-docs

Structure du projet

config/
documentation/
postmanExport/
src/
 ├─ controllers/
 ├─ models/
 ├─ routes/
 └─ middlewares/
server.js


# Routes principales
Produits /products
GET /products : liste tous les produits

GET /products/:id : détail produit

POST /products : créer un produit

PUT /products/:id : mettre à jour

DELETE /products/:id : supprimer

Utilisateurs /users
GET /users : liste utilisateurs

GET /users/:id : détail utilisateur

POST /users : créer utilisateur

DELETE /users/:id : supprimer utilisateur (optionnel)

# Middlewares
logger : journalise chaque requête

notFound : gère les routes inexistantes

errorHandler : capture et renvoie les erreurs

# Fonctionnalités
CRUD produits et utilisateurs

Validation des champs

Gestion des erreurs et statuts HTTP

Documentation interactive Swagger