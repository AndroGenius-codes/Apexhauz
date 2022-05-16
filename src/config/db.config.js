require('dotenv').config();
const mysql = require('mysql')

const connection = mysql.createConnection({
    host:process.env.DB_HOST ,
    user: process.env.DB_USER,
    password: process.env.password,
    database: process.env.MYSQL_DB
    
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
})

module.exports = connection;