const { db, DataTypes } = require('../db/connection');

const Task = db.define(
    'Task',
    {
        taskName: DataTypes.STRING,
        urgent: DataTypes.BOOLEAN,
        importanta: DataTypes.BOOLEAN,
        completed: DataTypes.BOOLEAN,
        description: DataTypes.STRING
    },
    {
        timestamps: true
    }
)

module.exports = {
    Task
}