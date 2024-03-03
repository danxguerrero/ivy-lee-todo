const { User } = require("./User");
const { Task } = require('./Task')

User.hasMany(Task, {
    onDelete: 'CASCADE'
}) // User has multiple tasks

Task.belongsTo(User) // Task belongs to one User

module.exports = {
    User,
    Task,
}