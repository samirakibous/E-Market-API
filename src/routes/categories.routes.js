const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categories.Controller");
const { categorySchema } = require("../validations/category.validation");
const { validateSchema } = require("../middlewares/validateSchema.middleware");

router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategoryById);
router.post("/", validateSchema(categorySchema),categoryController.createCategory);
router.put("/:id", validateSchema(categorySchema),categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);
router.put("/soft-delete/:id", categoryController.softDeleteCategory);
router.put("/restore/:id", categoryController.restoreCategory);

module.exports = router;
