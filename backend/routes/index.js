const express = require('express')
const router = express.Router()

const points = require('./readpoints')

router.use('/pontos', points)

router.use('/', (req, res) => {
    return res.status(200).send('Conected...')
})


module.exports = router