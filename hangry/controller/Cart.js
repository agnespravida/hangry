const {Carts, Menu_Availability, Menu_Data} = require('../models/index.js')

function CreateOrUpdate(req, res, next) {
    return Menu_Availability.findByPk(req.body.menu_availability_id)
        .then(response => {
            if (response.dataValues.quantity >= req.body.quantity) {
                return Carts.findOne({
                    where: {
                        id: req.user.id,
                        menu_availability_id: req.body.menu_availability_id
                    }
                })
            } else {
                throw new Error('Product Not Avaible')
            }
        })
        .then(async data => {
            if (!data) {
                return Carts.create({
                    user_id: req.user.id,
                    menu_availability_id: req.body.menu_availability_id,
                    quantity: req.body.quantity
                })
            } else {
                await data.update({
                    quantity: data.dataValues.quantity + req.body.quantity
                })
            }
        })
        .then(() => {
            res.status(200).json({
                status: 200,
                message: 'Success add to cart'
            })
        })
        .catch(err => {
            next(err)
        })
}

function List(req, res, next) {
    return Carts.findAll({
        where: {
            user_id: req.user.id
        },
        attributes: ['id', 'quantity'],
        include: {
            model: Menu_Availability,
            attributes: ['id'],
            include: {
                model: Menu_Data,
                attributes: ['id', 'name', 'image']
            }
        }
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

function Delete(req, res, next) {
    return Carts.destroy({
        where: {
            id: req.params.cart_id
        }
    })
    .then(_ => {
        res.status(200).json({
            status: 200,
            message: 'Successfully delete cart'
        })
    })
    .catch(err => {
        console.log(err)
        next(err)
    })
}

module.exports = {CreateOrUpdate, List, Delete}