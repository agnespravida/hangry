const jwt = require('jsonwebtoken');

function createToken(payload) {
    let token = jwt.sign(payload, 'shhhhh');
    return token;
}

function verifyToken(token) {
    var decoded = jwt.verify(token, 'shhhhh');
    return decoded
}

module.exports = {createToken, verifyToken}