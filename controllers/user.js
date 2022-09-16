const { User, Profile } = require("../models/index");
const checkPass = require("../helpers/comparePass");


class Controlller {

    static loginPage(req, res) {
        res.render('login')
    }

    static login(req, res) {
        const { username, password } = req.body;
        User.findOne({ where: { username } })
            .then((result) => {

                if (checkPass(password, result.password)) {
                    req.session.UserId = result.id
                    // console.log(result);
                    // req.session.role= result.dataValues.role
                    // console.log( req.session.role,req.session.UserId);
                    req.session.data = { UserId: result.id, role: result.role }
                    res.render('landingPage', { data: req.session.data })
                } else {
                    res.send("salahpass")
                }
            }).catch((err) => {
                res.send(err)
            });

    }

    static logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/')
            }
        })
    }

    static addPage(req, res) {
        res.render('addUser')
    }

    static add(req, res) {
        const { username, email, password } = req.body;

        User.create({ username, email, password })
            .then((result) => {
                return Profile.create({ UserId: result.id })
            })
            .then((result) => {
                res.redirect('/user/login')
            })
            .catch((err) => {
                res.send(err)
            });
    }



}

module.exports = Controlller