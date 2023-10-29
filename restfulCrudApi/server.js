const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/usersModel');
const connect = require('./models/connection');

app.use(express.json()); 
app.use(express.urlencoded({extended:false}));

app.get("/", (req,res)=>{
    res.status(200).json({"Hello":"welcome to my first CRUD with non-relational database"});
})

app.post("/user", async (req,res)=>{
    try{
        const user = await User.create(req.body);
        res.status(201).json(user);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

app.get("/user", async (req,res)=>{
    try{
        const user = await User.find({});
        res.status(200).json(user);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

app.put("/user/:id", async (req,res)=>{
    try{
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if(!user){
            return res.status(404).json({message: "Cannot find any user with id."});
        }
        const updated = await User.findById(id);
        res.status(200).json(updated);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

app.delete("/user/:id", async (req,res)=>{
    try{
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message: "Cannot find any user with id"});
        }
        res.status(200).json(user);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

app.listen(3000, ()=>{
    console.log("Server is running!");
})




