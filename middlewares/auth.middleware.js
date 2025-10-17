const jwt = require('jsonwebtoken')
require('dotenv').config();

const userAuth =(req,res,next)=>{
    const {token} = req.cookie

    const decode = jwt.verify('token',PRIVATE_KEY);
    req.user = decode;
    next();
}

module.exports = userAuth;