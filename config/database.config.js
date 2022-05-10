const mysql = require('mysql');
const connection  = mysql.createConnection({
   
    host:"localhost",
    user: "root",
    password:"bogofanyo",
    database: "users"
});

connection.connect((err) => {
    if(err) throw err;
    console.log("connected")
})

module.exports = connection;