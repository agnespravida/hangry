const {Carts, Menu_Availability, Menu_Data, Transactions, TransactionDetail, sequelize} = require('../models/index.js')



async function Checkout(req, res, next) {
    return Carts.findAll({
        where: {
            id: req.body.carts_id,
            user_id: req.user.id
        },
        include: {
            model: Menu_Availability,
            include: {
                model: Menu_Data
            }
        },
    })
        .then(async data => {
            let promises = []
            let total_payment = 0
            data.map(async el => {
                if (el.dataValues.Menu_Availability.dataValues.quantity >= el.dataValues.quantity) {
                    total_payment += el.dataValues.Menu_Availability.dataValues.Menu_Datum.dataValues.price * el.dataValues.quantity
                } else {
                    throw new Error('Barang tidak tersedia')
                }
            })
            const transaction = await Transactions.create({
                transaction_date: new Date(),
                user_id: req.user.id,
                total_payment
            })

            data.map(async el => {
                promises.push(await TransactionDetail.create({
                    transaction_id: transaction.dataValues.id,
                    menu_availability_id: el.dataValues.menu_availability_id,
                    menu_name: el.dataValues.Menu_Availability.dataValues.Menu_Datum.dataValues.name,
                    menu_price: el.dataValues.Menu_Availability.dataValues.Menu_Datum.dataValues.price,
                    quantity: el.dataValues.quantity
                }))

                promises.push(await Menu_Availability.update({
                    quantity: el.dataValues.Menu_Availability.dataValues.quantity - el.dataValues.quantity
                }, {
                    where: {
                        id: el.dataValues.menu_availability_id
                    },
                }))
            })

            promises.push(await Carts.destroy({
                where: {
                    id: req.body.carts_id
                }
            }))

            return Promise.all(promises)
        })
            .then(async data => {
                res.status(200).json({
                    status: 200,
                    message: 'Successfully checkout'
                })
            })
            .catch(async err => {
                next(err)
            })
}

module.exports = {Checkout}