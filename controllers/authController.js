const user = require("./../Models/userModel");

exports.signup = async (req, res, next)=>{
    try {
        const newUser = await user.create(req.body);    
    } catch (error) {
        console.log(error.message)
    }
    

}