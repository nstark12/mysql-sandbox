const router = require('express').Router()
const pokemonRoutes = require('./pokemon')
const trainersRoutes = require('./trainers')
const movesRoutes = require('./moves')

router.use('/api/pokemon', pokemonRoutes)
router.use('/api/trainers', trainersRoutes)
router.use('/api/move', movesRoutes)

module.exports = router
