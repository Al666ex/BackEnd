const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Post = sequelize.define('post', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    author: {type: DataTypes.STRING, defaultValue: "author"},
    //title: {type: DataTypes.STRING, unique: true, allowNull : false},
    title: {type: DataTypes.STRING, allowNull : false},
    content: {type: DataTypes.STRING, allowNull : false},
    picture: {type : DataTypes.STRING}
})

module.exports = {
    Post
}





