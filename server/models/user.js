'use strict';
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
      User.hasMany(models.Post, {foreignKey:"UserId"})
    }
  }
  User.init( {
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "email cannot be null" },
        notNull: { msg: "email cannot be null" },
      },
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: { msg: "Invalid email format" },
        notEmpty: { msg: "email cannot be null" },
        notNull: { msg: "email cannot be null" },
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "password cannot be null" },
        notNull: { msg: "password cannot be null" },
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};