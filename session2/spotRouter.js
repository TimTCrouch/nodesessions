const express = require('express');
//creating a custom router
const router = express.Router();

//giving router sub-routes
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