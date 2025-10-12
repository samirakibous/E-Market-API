const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categories.Controller");
const { categorySchema } = require("../validations/category.validation");
const { validateSchema } = require("../middlewares/validateSchema.middleware");

/**
 * @swagger
 * tags:
 *   name: Catégories
 *   description: Gestion des catégories
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Récupère toutes les catégories
 *     tags: [Catégories]
 *     responses:
 *       200:
 *         description: Liste des catégories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "68e790be7441f0cba5007aa1"
 *                   name:
 *                     type: string
 *                     example: "Mode"
 */

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Récupère une catégorie par ID
 *     tags: [Catégories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la catégorie
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Catégorie récupérée
 *       404:
 *         description: Catégorie non trouvée
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Crée une nouvelle catégorie
 *     tags: [Catégories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Beauté"
 *     responses:
 *       201:
 *         description: Catégorie créée
 *       400:
 *         description: Données invalides
 */

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Met à jour une catégorie
 *     tags: [Catégories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la catégorie à mettre à jour
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Mode"
 *     responses:
 *       200:
 *         description: Catégorie mise à jour
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Catégorie non trouvée
 */

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Supprime une catégorie
 *     tags: [Catégories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la catégorie à supprimer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Catégorie supprimée
 *       404:
 *         description: Catégorie non trouvée
 */

/**
 * @swagger
 * /categories/soft-delete/{id}:
 *   put:
 *     summary: Supprime une catégorie de manière soft
 *     tags: [Catégories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la catégorie à soft delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Catégorie soft supprimée
 *       404:
 *         description: Catégorie non trouvée
 */

/**
 * @swagger
 * /categories/restore/{id}:
 *   put:
 *     summary: Restaure une catégorie soft supprimée
 *     tags: [Catégories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la catégorie à restaurer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Catégorie restaurée
 *       404:
 *         description: Catégorie non trouvée
 */
router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategoryById);
router.post("/", validateSchema(categorySchema),categoryController.createCategory);
router.put("/:id", validateSchema(categorySchema),categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);
router.put("/soft-delete/:id", categoryController.softDeleteCategory);
router.put("/restore/:id", categoryController.restoreCategory);

module.exports = router;
