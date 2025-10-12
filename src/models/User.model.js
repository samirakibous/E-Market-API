const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user", enum: ["user", "admin"] },
    deletedAt: { type: Date, default: null } 
}, {
    timestamps: { createdAt: true, updatedAt: false }
});
module.exports = mongoose.model("User", userSchema);