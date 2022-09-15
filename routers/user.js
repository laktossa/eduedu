const Controlller = require('../controllers/user');
const router = require('express').Router();
// router.get('/')
router.get('/add',Controlller.add)
router.get('/add',Controlller.addP)


module.exports = router