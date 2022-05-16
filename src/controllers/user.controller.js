const db = require('../config/database.config')

    //  save user in the database 
exports.create= (req,res)=>{
    let prop = req.body;
    // add new user to the database
    let query = "INSERT INTO Property (owner,price,city,address,type,image_url,created_at,status,state) VALUES(?,?,?,?,?,?,?,?,?)";
    //create a user
    db.query(query,[prop.owner,prop.price,prop.type,prop.city,prop.address,
    prop.image_url,prop.created_at,prop.status,prop.state],(err,results)=>{
        //handling error
        if(!err){
            //success
            return res.status(200).json({message:"Property created successfully"})
        }
        else{
            //server error
            return res.status(500).json(err)
        }
    })
}

