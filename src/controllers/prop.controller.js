
//property feature
const  Property  = require("../models/prop.models");
const bcrypt = require("bcrypt");
const {generate: generateToken}= require("../middleware/authJwt");
exports.createProperty= async (req, res, next) => {
     const body =req.body;
     const {id,owner,status,price,state,city,address,type,image_url,created_on} = req.body;
     const prop= new Property(id,owner,status,price,state,city,address,type,image_url,created_on);
     
    //encrypt password with bcrypt
    const salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(body.password, parseInt(salt));

     
    //Reject empty values
    if(!req.body) { res.status(400).send({message:"cannot be empty"})};
    

    
    
    
     //display property data
    Property.createProperty(body, (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).send({
                status:"error",
                message: err.message
            });
        }
        else {
            let token = generateToken(data.id);
            
            
            
            res.status(200).send(
                {
                    status:"success",
                    data: ({token,...prop})
                        
                        
                        
                            
                        
                        
                    
                }
            )
        }
    });

}





