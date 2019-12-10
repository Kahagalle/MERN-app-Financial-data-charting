const router = require('express').Router()
const request = require('superagent')

const Indicator = require('../models/indicator.model')

// Get all links
router.get('/', async (req, res) => {

    request
    .get('https://www.alphavantage.co/query')
    .query({ function: 'FX_INTRADAY' })
    .query({ from_symbol: 'EUR' })
    .query({ to_symbol: 'USD' })
    .query({ interval: '5min' })
    .query({ outputsize: 'compact' })
    .query({ apikey: process.env.API_KEY })
    .then(apidata => res.json(apidata.body["Time Series FX (5min)"]))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Create new indicator
router.post('/', async (req, res) => {

    request
    .get('https://www.alphavantage.co/query')
    .query({ function: 'FX_INTRADAY' })
    .query({ from_symbol: 'EUR' })
    .query({ to_symbol: 'USD' })
    .query({ interval: '5min' })
    .query({ outputsize: 'compact' })
    .query({ apikey: process.env.API_KEY })
    .then(apidata => res.status(201).json(apidata.body))
    .catch(err => res.status(400).json('Error: ' + err));
  
});

module.exports = router;