var router = require('express').Router();

router.use('/', require('./restaurant'));
router.use('/', require('./dish'));

module.exports = router;