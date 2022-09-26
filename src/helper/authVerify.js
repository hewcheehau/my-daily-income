const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send("Access denied")
    
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }
    catch (e) {
        res.status(400).send("Invalid token")
    } 
}   

const generateToken = (uid) => {
    return new Promise((resolve, reject) => {
        //jwt has 3 parts
        //1 header
        //2 payload
        const payload = {uid}
        //3 - a secret(signature)
        jwt.sign(payload, process.env.TOKEN_SECRET, {
            expiresIn: '24h',
        }, (error, token) => {
            console.log("got error " + error);
            if (error) {
                //Could not create token
                reject('Could not connect to jwt')
            }
            else {
                resolve(token)
            }
        })
    })
}
module.exports = {
    generateToken,
    verifyToken
}