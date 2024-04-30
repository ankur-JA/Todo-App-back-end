const express = require('express');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const cors = require('cors');
const UserRoute = require('./Routes/users');
const TodoRoute = require('./Routes/todo')


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', UserRoute);
app.use('/api', TodoRoute);


mongoose
        .connect("mongodb://127.0.0.1:27017/Todo")
        .then(() => { console.log("MongoDB connected")})
        .catch((err) => {console.log("Connect Error", err)});


app.listen(port, () => {
    console.log("My server is running on port: " + port);
})


