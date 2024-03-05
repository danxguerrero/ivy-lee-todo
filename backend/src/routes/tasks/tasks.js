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

module.exports = router;