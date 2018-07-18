const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Spot');
});

router.get('/see', (req, res) => {
    res.send('See Spot');
});

router.get('/run', (req, res) => {
    res.send('See Spot run');
});

router.get('/run/run', (req, res) => {
    res.send('Run Spot run');
});

module.exports = router;