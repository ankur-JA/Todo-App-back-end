const mongoose = require('mongoose');


const todoSchhema = new mongoose.Schema({
    title: {type: String},
});

const userSchema = new mongoose.Schema({
    first_name: {type: String},
    last_name: {type: String},
    UserId: {type: String, uniqe: true},
    password: {type: String},
    todos: [todoSchhema]
})


const USER = mongoose.model("users", userSchema);


module.exports = { USER };