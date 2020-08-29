const router = require('express').Router()
const readController = require('../controllers/readController')

router.get('/ler', readController.index)



module.exports = router