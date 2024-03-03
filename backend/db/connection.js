const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

const db = new Sequelize('postgresql://danxguerrero:H0jCehNP9cqW@ep-nameless-sun-a51z0xjd.us-east-2.aws.neon.tech/todo-list?sslmode=require');

module.exports = {
    db,
    DataTypes
}