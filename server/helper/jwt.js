const jwt = require("jsonwebtoken")


function signToken(user) {
    return jwt.sign(user, "skjaksja")
}
function verifToken(token){
    return jwt.verify(token, "skjaksja")
}

module.exports = {signToken, verifToken}