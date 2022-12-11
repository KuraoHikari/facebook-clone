'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, {foreignKey:"UserId"})
    }
  }
  Post.init({
    description: {
      type: DataTypes.STRING,
    },
    imageLink: {
      type: DataTypes.STRING,
    },
    UserId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: { msg: "UserId cannot be null" },
        notNull: { msg: "UserId cannot be null" },
      },
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};