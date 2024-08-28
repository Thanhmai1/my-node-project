const User = require('../models/model_user.js');

const createUser = async function(userData) {
    try {
        const newUser = new User(userData);
        await newUser.save();
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};

const getAllUsers = async function() {
    try {
        return await User.find({});
    } catch (error) {
        console.error("Error retrieving users:", error);
        throw error;
    }
};


module.exports = {
    createUser,
    getAllUsers
};


