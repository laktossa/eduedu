const { Course,Category,User,Profile} = require('../models/index');

class Controlller {

    static listCourse(req,res){
        Course.findAll({
            include : [Category,User]
        })
        .then(data => {
            // res.send(data)
            res.render('listCourse',{data})
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static detail(req,res){
        console.log(req.params);
        let {id} = req.params
        // let result = {}
        Course.findAll({
            include : {
               model: User,
               include: Profile
            },
            where:{id}
        })
        .then(result => {
            let data = result[0]
            // res.send(data)
            res.render('detailCourse',{data})
        })
        .catch(err =>{
            res.send(err)
        })
        
    }

    static add(req,res){
        Category.findAll({})
        .then(data => {
            // let data = result[0]
            // res.send(data)
            res.render('addCourse',{data})
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static addP(req,res){
        console.log(req.body);
        const {name,descriptiont,duration,CategoryId} = req.body
        
        Course.create({
            name,descriptiont,duration,CategoryId
        })
        .then(data => {
            // res.send(data)
            res.redirect('/course')
        })
        .catch(err =>{
            let error = err
            // console.log(err.name);
            if (err.name === "SequelizeValidationError") {
                error = err.errors.map(el => el.message)
            }
            res.send(error)
        })
        // res.send('ini add')
    }

}

module.exports = Controlller