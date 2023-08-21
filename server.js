const mysql = require('mysql2')
const connection = mysql.createConnection({
    socketPath: '/tmp/mysql.sock',
    user: 'root',
    password: 'rootroot',
    database: 'pokemon_db'
})

const init = async () => {
    const results = await connection.promise().query(
        `INSERT INTO pokemon (name, type, moves, is_evolved, trainer_id) VALUES
        (?, ?, ?, ?, ?)`,
        ['jigglypuff3', 'fairy', 2, false, 1]
    )

    const pokemon = await connection.promise().query('SELECT * FROM pokemon')
    console.log(pokemon)
}

init()
