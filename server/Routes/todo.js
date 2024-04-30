const express = require("express");
const { authenticateJwt } = require("../middleware/auth");
const { USER } = require('../DB/db');
const findIndex = require('../func/findIndex')
const route = express.Router();

//Get All the Todo for the User
route.get('/todos', authenticateJwt, async (req, res) => {
    const userid = res.locals.user.UserId;
    const user = await USER.findOne({UserId: userid});
    
    
    if(user) {
        const todo = user.todos;
        res.status(200).json({todo});
    } else {
        res.status(400).json({ message: "User not found!"})
    }

});

//Get spcefic Todo for the user
route.get('/todo/:id', authenticateJwt, async (req, res) => {
    const id = req.params.id;
    const userid = res.locals.user.UserId;
    const user = await USER.findOne({UserId: userid});

    if (!user) {
        return res.status(401).json({message: "User not found!"});
    }
    const todo = user.todos.find(todo => todo.id === id);
    if (!todo) {
        return res.status(404).json({message: "Todo not found!"});
    }

    res.status(200).json({todo});
});


// Add todo for the user
route.post('/todo', authenticateJwt, async (req, res) => {
    const userid = res.locals.user.UserId;
    const user = await USER.findOne({UserId: userid});

    if(!user) {
        res.status(404).json({ message: "User not found!"});
    }


    const newTodo = {
        title: req.body.title,
    }
 
    user.todos.push(newTodo);
    user.save();
    res.status(200).json({ message: "Todo added succesfully!"});
});


// Delete All the Todo for the user
route.delete('/todo/reset', authenticateJwt, async (req, res) => {
    const userid = res.locals.user.UserId;
    const user = await USER.findOne({UserId: userid});

    if(!user) {
        res.status(401).json({message: "User not found"});
    }

    user.todos = [];
    user.save()

    res.status(201).json({message: "All the todo got rest"});
});

// Delete specific Todo for the user

route.delete('/todo/:id', authenticateJwt, async (req, res) => {
    const userid = res.locals.user.UserId;
    const id = req.params.id;
    const user = await USER.findOne({UserId: userid});

    if(!user) {
        res.status(401).json({message: "User not found!"});
    }

    const index = findIndex(user.todos, id);
    
    user.todos.splice(index, 1);
    await user.save();

    res.status(200).json({message: "successfully delete!"});
});

// Update the todo for the user
route.put('/todo/:id', authenticateJwt, async (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const userid = res.locals.user.UserId;
    const user = await USER.findOne({UserId: userid});

    if(!user) {
        res.status(401).json({message: "User not found!"});
    }

    const index = findIndex(user.todos, id);
    user.todos[index].title = title;
    await user.save();

    res.status(200).json({message: "todo updated!"});

});

module.exports = route;