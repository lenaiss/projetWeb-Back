const jwt = require('jsonwebtoken');
require('dotenv').config();

async function generateToken(dataId, dataFirstname, dataLastname, dataEmail, dataRole){
    return jwt.sign({dataId, dataFirstname, dataLastname, dataEmail, dataRole}, process.env.TOKEN_SECRET, { expiresIn: '10m'});
    // return jwt.sign({dataId, dataFirstname, dataLastname, dataEmail, dataRole}, process.env.PRIVATE_KEY, { algorithm: 'RS256' });
}


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
};

module.exports = { generateToken, authenticateToken };