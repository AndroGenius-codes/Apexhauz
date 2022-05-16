const User = require("../models/user.models");


//check for existing mail
const checkEmail =(req,res, next) =>{
    const { email } = req.body;
User.findByEmail(email, (_, data) => {
    if (data) {
        res.status(400).send({
            status: 'error',
            message: `The email address '${email}' already exits`
        });
        return;
    }
    next();
});

}
module.exports = checkEmail;
