const express = require('express')
const { Task } = require('../../../models')
const { requiresAuth } = require('express-openid-connect')

const router = express.Router()

router.get('/', async (req, res, next) => {
    const { id } = req.user
    try {
        const tasks = await Task.findAll({
            where: {
                id: id
            }
        })
        if (!tasks) {
            return res.sendStatus(404)
        }
        res.send({tasks: tasks})
    } catch (error) {
        next(error)
    }
});

router.post('/', async (req, res, next) => {
    const { userId, username } = req.user;
    const { task } = req.body;

    try{
        // Find the user in the db
        const creator = await User.findOne({
            where: {
                userId: userId,
                username: username
            }
        })

        if (!creator) {
            res.sendStatus(404)
        }

        // Create new Task and associate the user
        const newTask = await Task.create(task)
        await newTask.setUser(creator)

        res.status(201).send({task: task})
    } catch(error) {
        next(error)
    }
})

module.exports = router;