const express = require('express');
const router = express.Router();
router.get('/', function(req, res) {
    res.render('create', { title: 'Create' });
});
router.post('/', async (req, res) => {
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
