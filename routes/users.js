const express = require('express');
const MongoClient = require("mongodb").MongoClient;
const router = express.Router();
const user_controller = require('../controllers/user_controller');
router.get('/', async function(req, res) {
    try {
        const users = await user_controller.getAllUsers();
        res.render('users', { users: users, title: 'User List' });
    } catch (error) {
        console.error("Error retrieving users:", error);
        res.status(500).send("Error retrieving users.");
    }
});

router.post('/create', async (req, res) => {
    const { username, fullname } = req.body;

    try {
        const newUser = new User({ username, fullname });
        await newUser.save();
        res.send('User created successfully');
    } catch (error) {
        res.status(500).send('Error creating user');
    }
});

module.exports = router;
