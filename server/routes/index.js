var router = require('express').Router();

router.use('/', require('./api/restaurant'));
router.use('/', require('./api/dish'));
router.use('/', require('./api/user'));

module.exports = router;