const {Router} = require('express')
const router = Router()
const {List} = require('../controller/Location')

router.get('/', List)


module.exports = router