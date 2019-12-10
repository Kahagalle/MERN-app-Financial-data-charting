const router = require('express').Router()
const Indicator = require('../models/indicator.model')

// Get all links
router.get('/', async (req, res) => {
    Indicator.find()
        .then(indicators => res.json(indicators))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get links matching a indicator
router.get('/:name', async (req, res) => {
    Indicator.findOne({ name: req.params.name})
        .then(indicator => res.json(indicator))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Create new indicator
router.post('/add', async (req, res) => {

    const newIndicator = new Indicator({
        name: req.body.name
    })

    newIndicator.save()
        .then(() => res.status(201).json('New indicator created!'))
        .catch(err => res.status(400).json('Error: ' + err));   
});

module.exports = router;