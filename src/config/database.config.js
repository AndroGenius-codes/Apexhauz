const mysql = require('mysql');
const connection  = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user: "root",
    password: 'vicky5528',
    database: "users"
});

connection.connect((err) => {
    if(err) throw err;
    console.log("connected")
})

module.exports = connection;