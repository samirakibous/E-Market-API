const User = require("../models/User.model");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching users" });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching user" });
    }
};

const createUser = async (req, res, next) => {
    try {
        const { fullname, email, password, role } = req.body;

        // Vérifier si l'email existe déjà
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email déjà utilisé" });
        }

        const newUser = new User({
            fullname,
            email,
            password,
            role,
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating user" });
    }
};

const softDeleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndUpdate(req.params.id, { deletedAt: new Date() }, { new: true });
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(deletedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting user" });
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting user" });
    }
};

const restoreUser = async (req, res) => {
    try {
        const restoredUser = await User.findByIdAndUpdate(req.params.id, { deletedAt: null }, { new: true });
        if (!restoredUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(restoredUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error restoring user" });
    }
};

module.exports = {getAllUsers,getUserById,createUser,updateUser,deleteUser,softDeleteUser,restoreUser};
