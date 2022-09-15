const router = require('express').Router();
const Controlller = require("../controllers/profile");


router.post('/', Controlller.editProfile)
router.get('/show', Controlller.profile)

module.exports = router;