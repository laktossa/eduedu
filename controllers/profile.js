const { Profile } = require('../models/index');

class Controlller {

    static profile(req, res) {
        Profile.findOne({ where: { UserId: req.session.data.UserId } })
            .then((result) => {
                res.render('profile')
            }).catch((err) => {
                res.send(err)
            });
    }

    static editProfile(req, res) {
        const { fullName, age, hometown, background } = req.body;
    
        Profile.update({ fullName, age, hometown, background }, { where: { UserId: req.session.data.UserId } })
            .then((result) => {
                res.redirect('/profile/show')
            }).catch((err) => {
                res.send(err)
            });
    }

}

module.exports = Controlller;