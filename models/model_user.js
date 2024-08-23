const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true
    },
    fullname: {
        type: String,
        required: [true, "Fullname is required"]
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
