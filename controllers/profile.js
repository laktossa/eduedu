const { Profile,Course } = require('../models/index');

class Controlller {

    static profile(req, res) {
        let obj = {}
        Profile.findOne({ where: { UserId: req.session.data.UserId } })
            .then((result) => {
                obj.data = result
                return Course.findAll({})
            })
            .then((result) => {
                obj.course = result
                res.render('profile',{result})
            }).catch((err) => {
                res.send(err)
            });
    }

    static editProfile(req, res) {
        const { fullName, age, hometown, background ,CourseId} = req.body;
    // console.log(req.body);
    // console.log(req.session.data.UserId);
        Profile.update({ fullName, age, hometown, background ,CourseId}, { where: { UserId: req.session.UserId } })
            .then((result) => {
                // console.log(result);
                res.redirect('/course')
            }).catch((err) => {
                res.send(err)
            });
    }

}

module.exports = Controlller;