const express = require('express')
const { User } = require('../../../models')

const router = express.Router()

router.get('/', async (req, res, next) => {
    const { id } = req.user
    try {
        const user = await User.findOne({
            where: {
                id: id
            }
        })
        if (!user) {
            return res.sendStatus(404)
        }
        res.send({ user})
    } catch (error) {
        next(error)
    }
});

module.exports = router;