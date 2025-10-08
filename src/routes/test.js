const express = require("express");
const router = express.Router();
const Product = require("../models/Product.model");

router.get("/add-product", async (req, res) => {
  try {
    const newProduct = new Product({
      name: "Test Product",
      price: 20,
      description: "Produit de test pour vérifier la connexion MongoDB",
    });

    const savedProduct = await newProduct.save();
    res.json({ message: "Produit ajouté avec succès", product: savedProduct });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'ajout", error });
  }
});

module.exports = router;
