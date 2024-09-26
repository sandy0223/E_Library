const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const UserModel = require('./models/User')

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://thesbcode:Sandeep16@cluster0.lvemelj.mongodb.net/signup')

app.post('/signup',(req,res)=>{
UserModel.create(req.body)
.then(Users => res.json(Users))
.catch(err => res.json(err))
})

app.post('/login',(req,res)=>{
    const {email , password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(!user){
            return res.status(404).json({message: 'User not found'});
        }
        if(user.password === password){
            res.json({message: 'Login successful'});
        }else{
            res.status(401).json({message: 'Invalid credentials'});
        }
    })
})

app.listen(3001,()=>{
    console.log('Server is good to go!');
})