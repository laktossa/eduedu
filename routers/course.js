const Controlller = require('../controllers/course');
const router = require('express').Router();


router.use((req, res, next) => {
    if (req.session.userId) {
        next()
    } else {
        res.redirect('/home')
    }
})

router.get('/',Controlller.listCourse)

router.use((req, res, next) => {
    if (req.session.userId) {
        next()
    } else {
        res.redirect('/home')
    }
})
router.get('/add',Controlller.add)
router.post('/add',Controlller.addP)

router.get('/:id',Controlller.detail)
router.get('/:id/delete',Controlller.delete)

router.get('/:id/tes/:Uid/score/:Sid',Controlller.nilai)
// router.get('/:id/edit',Controlller.edit)
// router.get('/:id/edit',Controlller.editP)


module.exports = router