const express = require('express')
const { Task } = require('../../../models')


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
        res.send({ tasks: tasks })
    } catch (error) {
        next(error)
    }
});

router.post('/', async (req, res, next) => {
    const { userId, username } = req.user;
    const { task } = req.body;

    try {
        // Find the user in the db
        const creator = await User.findOne({
            where: {
                userId: userId,
                username: username
            }
        });

        if (!creator) {
            res.sendStatus(404);
        };

        // Create new Task and associate the user
        const newTask = await Task.create(task);
        await newTask.setUser(creator);

        res.status(201).send({ task: task })
    } catch (error) {
        next(error);
    }
})

router.delete('/:taskId', async (req, res, next) => {
    const { taskId } = req.params;
    try {
        const taskToDelete = await Task.findByPk(taskId)
        if (!taskToDelete) {
            return res.sendStatus(404)
        };

        await taskToDelete.destroy();
        res.sendStatus(200);
    } catch (error) {
        next(error);
    }
})

router.put(':/taskId', async (req, res, next) => {
    const { taskId } = req.params

    try {
        const taskToUpdate = await Task.findByPk(taskId)
        if (!taskToUpdate) {
            return res.sendStatus(404)
        }

        const updatedTask = await Task.update(req.body)
        res.json(updatedTask)

    } catch (error) {
        next(error)
    }
})

module.exports = router;