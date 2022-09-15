const Controlller = require('../controllers/user');
const router = require('express').Router();
const routerCourse = require('./course')
const routerUser = require('./user.js')

router.get('/',Controlller.login)
router.use('/course',routerCourse)
router.use('/user',routerUser)

module.exports = router