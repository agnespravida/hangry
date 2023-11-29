const {Menu_Data, Menu_Availability, Locations} = require('../models/index.js')

function ListMenu(req, res, next) {
    return Menu_Availability.findAll({
        attributes: ['id', 'quantity'],
        include: [
            {
                model: Menu_Data,
                attributes: ['id', 'name', 'price', 'image', 'description']
            },
            {
                model: Locations,
                attributes: ['name', 'position']
            }
        ]
    })
        .then(data => {
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

module.exports = {ListMenu}