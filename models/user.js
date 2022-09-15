'use strict';
const bcrypt = require('bcrypt');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Course)
      User.hasOne(models.Profile)
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    CourseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  }),
    User.beforeCreate((value) => {
      const hash = bcrypt.hashSync(value.dataValues.password, 10);
      value.dataValues.password = hash
      console.log(hash);
    })
  return User;
};