const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./model/userModel');

const cors= require('cors');

mongoose.connect('mongodb://localhost:27017/registration-page-db');

app.use(cors());
app.use(express.json());  //this says that you should parse that anything comes named body into json

app.post('/api/register', async (req,res) => {
    console.log(req.body);
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.json({status:'ok'});
    }
    catch(err) {
        res.json({status:'error', error: "Duplicate email"});
    }
});

app.post('/api/login', async (req,res) => {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        });
        if(user) {
            res.json({status:'ok', user: true});
        }
        else{
            res.json({status:'error', user: false});
        }
});


app.listen(1337, () => {
    console.log("Server started in port 1337");
});