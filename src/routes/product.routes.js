const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.Controller");
const { productSchema } = require("../validations/product.validation");
const { validateSchema } = require("../middlewares/validateSchema.middleware");

/**
 * @swagger
 * tags:
 *   name: Produits
 *   description: Gestion des produits
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Récupère tous les produits
 *     tags: [Produits]
 *     responses:
 *       200:
 *         description: Liste des produits
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "68e51782dac907f679beccbc"
 *                   title:
 *                     type: string
 *                     example: "T-shirt de sport"
 *                   price:
 *                     type: number
 *                     example: 29.99
 *                   stocke:
 *                     type: number
 *                     example: 50
 *                   imageUrl:
 *                     type: string
 *                     example: "https://example.com/images/tshirt-sport.jpg"
 *                   description:
 *                     type: string
 *                     example: "T-shirt respirant et léger, idéal pour le sport."
 *                   categoryIds:
 *                     type: array
 *                     items:
 *                       type: string
 */

/**
 * @swagger
 * /products/search:
 *   get:
 *     summary: Recherche des produits par prix minimum ou maximum
 *     tags: [Produits]
 *     parameters:
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: number
 *         description: Prix minimum
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: number
 *         description: Prix maximum
 *     responses:
 *       200:
 *         description: Produits correspondant aux critères
 */

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Récupère un produit par ID
 *     tags: [Produits]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du produit
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produit trouvé
 *       404:
 *         description: Produit non trouvé
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Crée un nouveau produit
 *     tags: [Produits]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "T-shirt de sport"
 *               price:
 *                 type: number
 *                 example: 29.99
 *               stocke:
 *                 type: number
 *                 example: 50
 *               imageUrl:
 *                 type: string
 *                 example: "https://example.com/images/tshirt-sport.jpg"
 *               description:
 *                 type: string
 *                 example: "T-shirt respirant et léger, idéal pour le sport."
 *               categoryIds:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Produit créé
 *       400:
 *         description: Données invalides
 */

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Met à jour un produit
 *     tags: [Produits]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du produit à mettre à jour
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               price:
 *                 type: number
 *               stocke:
 *                 type: number
 *               imageUrl:
 *                 type: string
 *               description:
 *                 type: string
 *               categoryIds:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Produit mis à jour
 *       404:
 *         description: Produit non trouvé
 */

/**
 * @swagger
 * /products/soft-delete/{id}:
 *   put:
 *     summary: Supprime un produit de manière soft
 *     tags: [Produits]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du produit à soft delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produit soft supprimé
 *       404:
 *         description: Produit non trouvé
 */

/**
 * @swagger
 * /products/restore/{id}:
 *   put:
 *     summary: Restaure un produit soft supprimé
 *     tags: [Produits]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du produit à restaurer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produit restauré
 *       404:
 *         description: Produit non trouvé
 */

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Supprime définitivement un produit
 *     tags: [Produits]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du produit à supprimer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produit supprimé
 *       404:
 *         description: Produit non trouvé
 */
router.get("/search", productController.searchProducts);
router.get("/", productController.getAllProducts);
router.post("/", validateSchema(productSchema), productController.createProduct);
router.get("/:id", productController.getProductById);
router.put("/:id", validateSchema(productSchema), productController.updateProduct);
router.put("/soft-delete/:id", productController.softDeleteProduct);
router.put("/restore/:id", productController.restoreProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;