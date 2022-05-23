const mysql = require('mysql2/promise');
// require('dotenv').config();

// console.log(process.env.MYSQL_HOST)
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ocorrencias-cidade',
    port: 3306
});

module.exports = connection;