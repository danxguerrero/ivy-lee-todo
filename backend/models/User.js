const {db, DataTypes } = require('../db/connection');

const User = db.define(
    'User',
    {
        userId: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
    }
)

module.exports = {
    User
}