const router = require('express').Router()
const User = require('../models/user.model')

// Get all links
router.get('/', async (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get links matching a username
router.get('/:username', async (req, res) => {
    User.findOne({ username: req.params.username})
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Create new user
router.post('/add', async (req, res) => {
    
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    newUser.save()
        .then(() => res.status(201).json('New user created!'))
        .catch(err => res.status(400).json('Error: ' + err));   
});

module.exports = router;