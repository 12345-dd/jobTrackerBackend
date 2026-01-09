const jwt = require("jsonwebtoken")

const secret = process.env.JWT_SECRET

const generateToken = (userId) => {
    return jwt.sign({id:userId},secret,{expiresIn:"3h"})
}

const verifyToken = (token) => {
    try{
        return jwt.verify(token,secret)
    }catch(err){
        console.log(err)
    }
}

module.exports = {generateToken,verifyToken}