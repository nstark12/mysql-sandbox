const connection = require('./db/connection')
const routes = require('./routes')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(PORT, () => console.log(`Pokemon API listening at http://localhost:${PORT}`))