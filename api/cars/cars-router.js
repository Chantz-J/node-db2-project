// DO YOUR MAGIC
const router = require('express').Router()
const Cars = require('./cars-model')

router.get('/', async (req, res, next) => {
    try {
        const car = await Cars.getAll()
        res.json(car)
    } catch (error) {
        next(error)
    }
})

module.exports = router
