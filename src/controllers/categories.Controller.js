const Category = require("../models/Category.model");

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find({ deletedAt: null });
        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération des catégories" });
    }
};

const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findOne({ _id: req.params.id, deletedAt: null });
        if (!category) return res.status(404).json({ message: "Catégorie non trouvée" });
        res.json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération de la catégorie" });
    }
};

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const newCategory = new Category({ name });
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la création de la catégorie" });
    }
};

const updateCategory = async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            { name: req.body.name },
            { new: true }
        );
        if (!updatedCategory) return res.status(404).json({ message: "Catégorie non trouvée" });
        res.json(updatedCategory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la mise à jour de la catégorie" });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            { deletedAt: new Date() },
            { new: true }
        );
        if (!deletedCategory) return res.status(404).json({ message: "Catégorie non trouvée" });
        res.json({ message: "Catégorie supprimée avec succès", deletedCategory });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la suppression de la catégorie" });
    }
};

module.exports = {getAllCategories,getCategoryById,createCategory,updateCategory,deleteCategory};
