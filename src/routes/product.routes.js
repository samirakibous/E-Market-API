const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.Controller");
const { productSchema } = require("../validations/product.validation");
const { validateSchema } = require("../middlewares/validateSchema.middleware");

// router.get("/", productController.getAllProducts);
router.post("/", validateSchema(productSchema), productController.createProduct);
// router.get("/:id", productController.getProductById);
// router.put("/:id", validateSchema(productSchema), productController.updateProduct);
// router.delete("/:id", productController.deleteProduct);

module.exports = router;