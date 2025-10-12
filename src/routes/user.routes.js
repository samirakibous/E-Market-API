const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.Controller");
const { userSchema } = require("../validations/user.validation");
const { validateSchema } = require("../middlewares/validateSchema.middleware");

/**
 * @swagger
 * tags:
 *   name: Utilisateurs
 *   description: Gestion des utilisateurs
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Récupère tous les utilisateurs
 *     tags: [Utilisateurs]
 *     responses:
 *       200:
 *         description: Liste des utilisateurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "68eab38f9d2aaba0500f8fdb"
 *                   fullname:
 *                     type: string
 *                     example: "Samira El Amrani"
 *                   email:
 *                     type: string
 *                     example: "samira@example.com"
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Récupère un utilisateur par ID
 *     tags: [Utilisateurs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'utilisateur
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Utilisateur trouvé
 *       404:
 *         description: Utilisateur non trouvé
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Crée un nouvel utilisateur
 *     tags: [Utilisateurs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string
 *                 example: "Samira El Amrani"
 *               email:
 *                 type: string
 *                 example: "samira@example.com"
 *               password:
 *                 type: string
 *                 example: "Ml!123456"
 *     responses:
 *       201:
 *         description: Utilisateur créé
 *       400:
 *         description: Données invalides
 */

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Met à jour un utilisateur
 *     tags: [Utilisateurs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'utilisateur à mettre à jour
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Utilisateur mis à jour
 *       404:
 *         description: Utilisateur non trouvé
 */

/**
 * @swagger
 * /users/soft-delete/{id}:
 *   put:
 *     summary: Supprime un utilisateur de manière soft
 *     tags: [Utilisateurs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'utilisateur à soft delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Utilisateur soft supprimé
 *       404:
 *         description: Utilisateur non trouvé
 */

/**
 * @swagger
 * /users/restore/{id}:
 *   put:
 *     summary: Restaure un utilisateur soft supprimé
 *     tags: [Utilisateurs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'utilisateur à restaurer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Utilisateur restauré
 *       404:
 *         description: Utilisateur non trouvé
 */

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Supprime définitivement un utilisateur
 *     tags: [Utilisateurs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'utilisateur à supprimer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Utilisateur supprimé
 *       404:
 *         description: Utilisateur non trouvé
 */

router.get("/", userController.getAllUsers);
router.post("/", validateSchema(userSchema), userController.createUser);
router.get("/:id", userController.getUserById);
router.put("/:id", validateSchema(userSchema), userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.put("/soft-delete/:id", userController.softDeleteUser);
router.put("/restore/:id", userController.restoreUser);

module.exports = router;