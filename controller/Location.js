const {Locations} = require('../models/index.js')

function List(req, res, next) {
    return Locations.findAll({
        attributes: ['id', 'name', 'position']
    })  
        .then(data => {
            console.log(data)
            res.status(200).json({
                status: 200,
                data
            })
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
}

module.exports = {List}