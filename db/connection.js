const mysql = require('mysql2')
const connection = mysql.createConnection({
    socketPath: '/tmp/mysql.sock',
    user: 'root',
    password: 'rootroot',
    database: 'pokemon_db'
})

module.exports = connection
