const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    // timestamp: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null } 
}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model("Category", categorySchema);