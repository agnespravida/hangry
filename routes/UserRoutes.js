const {Router} = require('express')
const router = Router()
const {Register, Login} = require('../controller/User')

router.post('/login', Login)

router.post('/register', Register)

module.exports = router