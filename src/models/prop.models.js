const dbconnection = require("../config/db.config");


class Property {
    constructor(id,owner,status,price,state,city,address,type,image_url,created_on) {
        this.id = id;
        this.owner = owner;
        this.status = status;
        this.price= price;
        this.state = state;
        this.city= city;
        this.address = address;
        this.type = type;
        this.image_url = image_url;
        this.created_on = created_on;
    }
    static createProperty(newProp, result) {
        dbconnection.query(`insert into properties values(?,?,?,?,?,?,?,?,?,?)`, [newProp.id,newProp.owner,newProp.status,newProp.price,newProp.state,newProp.city,newProp.address,newProp.type,newProp.image_url,newProp.created_on],
           (err, res) => {
              if(err) {
                console.log("oops there was an error", err);
                result(err, null);
                return;
    
              }
              console.log({"status":"success", "data":{...newProp}});
              result(null, {id: res.insertid, ...newProp});
            }
        );
    }
}

module.exports = Property;