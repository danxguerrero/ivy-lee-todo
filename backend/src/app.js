require('dotenv').config('.env')
const express = require('express');
const app = express();
const { auth } = require('express-openid-connect')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { AUTH0_SECRET, AUTH0_AUDIENCE, AUTH0_CLIENT_ID, AUTH0_BASE_URL } =
  process.env

const config = {
  authRequired: true,
  auth0Logout: true,
  secret: AUTH0_SECRET,
  baseURL: AUTH0_AUDIENCE,
  clientID: AUTH0_CLIENT_ID,
  issuerBaseURL: AUTH0_BASE_URL
}

app.use(auth(config))

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