const express = require('express');
const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModel');
const router = express.Router()

const Model = require('../models/UserModel');

router.post("/signup", async (req, res) => {
    try {
        const data = req.body;
    if (!data.ic && !data.password) {
        res.status(400).send({error: "Data not formatted properly"})
    }
    else {
    const existUser = await UserModel.findById(data.ic);
    if (existUser) {
        res.status(400).send({error: "The IC already exist"})
    }
    else {
        //create a new mongoose doc from user data
    const user = await UserModel.create({_id: data.ic, password: data.password, name: data.name})
    //generate salt to hash password
    const salt = await bcrypt.genSalt(20);
    //Set user password  to hashed password
    user.password = await bcrypt.hash(user.password, salt);
    user.save().then((doc) => res.status(201).json({"status": 200, "message": "SIGN_UP_SUCCESS"}));
    }
    }
    }
    catch (error) {
        res.status(500).send({message: error.message})
    }
    
});

router.post("/login", async (req, res) => {
    try {
        const data = req.body;
        if (!data.ic || !data.password) {
            res.status(400).send({error: "Data not formatted properly"});
        }
        else {
            const user = await UserModel.findById(data.ic);
            if (user) {
                const cmp = await bcrypt.compare(data.password, user.password);
                console.log("come heres ")
                if (cmp) {
                    res.send("Auth successful")
                }
                else {
                    console.log("end & send")
                    res.send("Wrong ic or password")
                }
            }
        }
    }
    catch (error) {
        res.status(500).send({message: error.message});
    }
})

module.exports = router;