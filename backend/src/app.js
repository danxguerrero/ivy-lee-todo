const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/items', async (req, res) => {
    res.send([{
        id: 1,
        title: "Laundry",
        completed: true
    }, {
        id: 2,
        title: "Wash Car",
        completed: false
    }])
})

module.exports = app;