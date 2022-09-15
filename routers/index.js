const router = require('express').Router();
const routerCourse = require('./course')
const routerUser = require('./user.js')
const routeProfile = require('./profile');

router.get('/', (req, res) => {
    
    res.render('landingPage', {data : req.session})
})

router.use('/course', routerCourse)
router.use('/user', routerUser)
router.use('/profile', routeProfile)

module.exports = router