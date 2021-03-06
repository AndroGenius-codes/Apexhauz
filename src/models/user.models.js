const dbconnection = require("../config/db.config");



class Users {
    constructor(id,email,first_name,last_name,password,phone,address,is_admin) {
        this.id = id;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.is_admin = is_admin;
    }
    static create(newUser, result) {
        dbconnection.query(`insert into Users values(?,?,?,?,?,?,?,?)`, [newUser.id, newUser.email, newUser.first_name, newUser.last_name, newUser.password, newUser.phone, newUser.address, newUser.is_admin ],
           (err, res) => {
              if(err) {
                console.log("oops there was an error", err);
                result(err, null);
                return;
    
              }
              console.log({"status":"success", "data":{...newUser}});
              result(null, {id: res.insertid, ...newUser});
            }
        );
    }
}

module.exports = Users;