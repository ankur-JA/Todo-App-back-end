const express = require("express");
const { USER } = require('../DB/db')
const { secret } = require("../middleware/auth");
const jwt = require('jsonwebtoken');


const route = express.Router();


route.post('/signup', async (req, res) => {
    const { first_name, last_name, UserId, password } = req.body;
    const user = await USER.findOne({ UserId });

    if (user) {
        res.status(400).json({message: "Sorry UserId already exist!"});
    } else {
        const newUser = new USER({ first_name, last_name, UserId, password });
        newUser.save();
        res.status(200).json({ message: "account has created successully!"});
    }
});


route.post('/login', async (req, res) => {
    const { UserId, password } = req.body;
    const user = await USER.findOne({ UserId, password });

    if(user) {
        const token = jwt.sign({UserId, role: 'user'}, secret, {expiresIn: '1h'});
        res.status(200).json({message: "Loged In", token: token});
    } else {
        res.status(400).json({message: "UserId or password is wrong!"});
    }
});

module.exports = route;