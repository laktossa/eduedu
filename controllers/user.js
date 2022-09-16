const { User } = require("../models/index");
const user = require("../models/user");

const bcrypt = require('bcrypt');

class Controlller {

    static loginPage(req, res) {
        res.render('login')
    }

    static login(req, res) {
        const { username, password } = req.body;

        User.findOne({ where: { username } })
            .then((result) => {
                if(bcrypt.compareSync(password, result.password)) {
                    res.redirect('/course')
                } else {
                    res.send("salahpass")
                }
                // console.log(bcrypt.compareSync(password, result.password));
            }).catch((err) => {
                console.log(err);
                res.send(err)

            });

    }

    static addPage(req, res) {
        res.render('addUser')
    }

    static add(req, res) {
        const { username, email, password } = req.body;

        User.create({ username, email, password })
        .then((result) => {
            res.redirect('/')
        }).catch((err) => {
            res.send(err)
        });
    }



}

module.exports = Controlller