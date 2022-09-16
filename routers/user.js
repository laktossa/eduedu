const Controlller = require('../controllers/user');
const router = require('express').Router();

router.get('/login', Controlller.loginPage)
router.post('/login', Controlller.login)

router.get('/add',Controlller.addPage)
router.post('/add',Controlller.add)

router.get('/logout', Controlller.logout)


module.exports = router