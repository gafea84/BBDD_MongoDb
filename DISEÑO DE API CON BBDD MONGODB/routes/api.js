const router = require('express').Router();

const apiInmueblesRouter = require('./api/inmueble');

router.use('/inmueble',apiInmueblesRouter);

module.exports = router;