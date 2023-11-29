const {Router} = require('express')
const router = Router()
const {CreateOrUpdate, List, Delete} = require('../controller/Cart')
const { authentication, authorizationCart } = require('../middlewares/authHandler')

router.use(authentication)
router.post('/', CreateOrUpdate)
router.get('/', List)

router.delete('/:cart_id', authorizationCart, Delete)


module.exports = router