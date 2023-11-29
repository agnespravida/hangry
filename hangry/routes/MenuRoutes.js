const {Router} = require('express')
const router = Router()
const {ListMenu} = require('../controller/Menu')

router.get('/', ListMenu)


module.exports = router