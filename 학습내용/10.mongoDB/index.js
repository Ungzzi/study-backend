const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const User = require('./models/User');
require("dotenv").config({ path: "variables.env" });

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to database successfully");
    }
})

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
    const newUser = new User();
    newUser.email = "test@naver.com";
    newUser.name = "ungzzi";
    newUser.age = 26;
    newUser
        .save()
        .then((user) => {
            console.log(user);
            res.json({
                message: 'User created successfully'
            })
        })
        .catch((err) => {
            res.json({
                message: 'User was not successfully created'
            })
        })
})

app.get('/signup', (req, res) => {
    res.render('signup');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})