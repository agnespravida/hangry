const { verifyToken } = require("../helpers/token")
const {Carts} = require('../models/index.js')

function authentication(req, res, next) {
    if (req.headers.authorization) {
        const token = req.headers.authorization.slice(7)
        const decoded = verifyToken(token)
        req.user = decoded
        next()
    } else {
        res.status(401).json({
            status: '401',
            message: 'Unauthorized'
        })
    }
}

function authorizationCart(req, res, next) {
    console.log(req.params)
    return Carts.findOne({
        where: {
            id: req.params.cart_id,
            user_id: req.user.id
        }
    })
        .then(data => {
            if (data) {
                next()
            } else {
                res.status(401).json({
                    status: '401',
                    message: 'Unauthorized'
                })
            }
        })
        .catch(err => {
            next(err)
        })
}

module.exports = {authentication, authorizationCart}