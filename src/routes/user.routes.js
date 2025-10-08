const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.Controller");
const { userSchema } = require("../validations/user.validation");
const { validateSchema } = require("../middlewares/validateSchema.middleware");

router.get("/", userController.getAllUsers);
router.post("/", validateSchema(userSchema), userController.createUser);
router.get("/:id", userController.getUserById);
router.put("/:id", validateSchema(userSchema), userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;