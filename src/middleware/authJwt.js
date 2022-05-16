const jwt = require("jsonwebtoken");



let secret_key = process.env.JWT_SECRET_KEY;



    const generate = (id) => jwt.sign({id},secret_key, {expiresIn:"1d"} );
    const decode = (token) => {
        try {
            return jwt.verify(token,secret_key ) 
        }  
        catch(error) {
            return res.status(401).send({ message:"unauthroized"});

        }
    }


    
    


module.exports = {
    generate, decode
}