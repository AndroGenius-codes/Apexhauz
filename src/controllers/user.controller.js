//sign up feature
const  User  = require("../models/user.models");
const bcrypt = require("bcrypt");
const {generate: generateToken}= require("../middleware/authJwt");
exports.create = async (req, res, next) => {
     const body =req.body;
     const {id, email, first_name, last_name} = req.body;
     const user = new User(id, email, first_name, last_name);
     
    //encrypt password with bcrypt
    const salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(body.password, parseInt(salt));

     
    //Reject empty values
    if(!req.body) { res.staus(400).send({message:"cannot be empty"})};
    

    
    
    
     //display signup data
    User.create(body, (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).send({
                status:"error",
                message: err.message
            });
        }
        else {
            let token = generateToken(data.id);
            
            
            
            res.status(201).send(
                {
                    status:"success",
                    data: ({token,...user})
                        
                        
                        
                            
                        
                        
                    
                }
            )
        }
    });

}


