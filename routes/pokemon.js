const router = require('express').Router()
const connection = require('../db/connection')

// create
router.post('/', async (req, res) => {
    const { name, type, moves, is_evolved, trainer_id } = req.body

    try {
        const result = await connection.promise().query(
            'INSERT INTO pokemon (name, type, moves, is_evolved, trainer_id) VALUES (?, ?, ?, ?, ?)',
            [name, type, moves, is_evolved, trainer_id]
        )
    
        res.json(result)
    } catch(err) {
        res.status(500).json(err)
    }
    
})

// read
router.get('/', async (req, res) => {

    try {
        const result = await connection.promise().query(
            'SELECT * FROM pokemon;'
        )
    
        res.json(result)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const result = await connection.promise().query(
            'SELECT * FROM pokemon WHERE id = ?;',
            id,
        )
    
        res.json(result)
    } catch(err) {
        res.status(500).json(err)
    }
})

// update
router.put('/:id', async (req, res) => {
    const id = req.params.id
    const { name, type, moves, is_evolved, trainer_id } = req.body

    try {
        const result = await connection.promise().query(
            `UPDATE pokemon
            SET name = ?, type = ?, moves = ?, is_evolved = ?, trainer_id = ?
            WHERE id = ?`,
            [name, type, moves, is_evolved, trainer_id, id]
           
        )
    
        res.json(result)
    } catch(err) {
        res.status(500).json(err)
    }
})

// delete
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const result = await connection.promise().query(
            `DELETE FROM pokemon WHERE id = ?`,
            id
        )
    
        res.json(result)
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router