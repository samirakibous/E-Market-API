//mongoose est une bibliothéque permet de travailler avec mongoDB dans nodejs
const mongoose = require("mongoose");
//mongoose.Schema définit la structure de nos données
const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    stocke: { type: Number, required: true, min: 0 },
    imageUrl: String,
    description: String,
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    deletedAt: { type: Date, default: null }
}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model("Product", productSchema);