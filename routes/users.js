const express = require('express');
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
router.post('/', async function(req, res) {
    try {
        await user_controller.createUser(req.body);
        res.redirect('/');
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Error creating user.");
    }
});
router.post('/user/delete', async (req, res) => {
    try {
        const fullname = req.body.fullname;
        await User.findOneAndDelete({ fullname: fullname });
        res.redirect('/user');
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
