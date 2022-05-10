const mysql = require('mysql');
const connection  = mysql.createConnection({
   
    host:"host",
    user: "root",
    password: process.env.password,
    database: "users"
});

connection.connect((err) => {
    if(err) throw err;
    console.log("connected")
})

module.exports = connection;