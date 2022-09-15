'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.belongsTo(models.Category)
      Course.hasMany(models.User)
    }
  }
  Course.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          msg: "name can not be null"
        },
        notEmpty: {
          msg: "name can not be empty"
        }
      }
    },
    descriptiont: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          msg: "fullName can not be null"
        },
        notEmpty: {
          msg: "descriptiont can not be empty"
        }
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull: {
          msg: "duration can not be null"
        },
        notEmpty: {
          msg: "duration can not be empty"
        }
      }
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull: {
          msg: "Category can not be null"
        },
        notEmpty: {
          msg: "Category can not be empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};