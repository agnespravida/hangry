const {Router} = require('express')
const router = Router()
const {Checkout} = require('../controller/Transaction')
const { authentication, authorizationCart } = require('../middlewares/authHandler')

router.use(authentication)
router.post('/', Checkout)


module.exports = router