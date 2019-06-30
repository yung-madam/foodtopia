const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//routrovani pres get
router.get('/', (req, res) => {
    res.send('zmrdstvi homa')
})

router.get('/api', (req, res) => {
    res.send('api vec')
})



module.exports = router;