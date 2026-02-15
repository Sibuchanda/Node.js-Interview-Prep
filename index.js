import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './model/connectDB.js';
import User from './model/model.js';

const DB_URL=process.env.MONGO_URI;
const PORT = 5000;



const app = express();
app.use(express.json()); // Middleware that reads JSON data sent by client and converts it into JavaScript object so we can access it using req.body

//Database connection
connectDB(DB_URL);


app.get('/',(req,res)=>{
    res.send("This is home page");
});

// Create operation
app.post('/users', async (req,res)=>{
    const newuser = {
        name: req.body.name,
        age: req.body.age
    }
    await User.create(newuser);
    res.status(201).send("User added successfully.");
});

// Read operation
app.get('/users', async (req,res)=>{
    const users = await User.find({});
    res.status(200).send(users);
});


app.listen(PORT,()=>{
    console.log(`Listening to PORT:${PORT}`);
})