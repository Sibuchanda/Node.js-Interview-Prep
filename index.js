import express from 'express';

const PORT = 5000;

let users = [
    {id: 1, name: "Lester", age: 23}
]

const app = express();
app.use(express.json()); // Middleware that reads JSON data sent by client and converts it into JavaScript object so we can access it using req.body

app.get('/',(req,res)=>{
    res.send("This is home page");
})
// Create operation
app.post('/users', (req,res)=>{
    const newuser = {
        id : Date.now(),
        name: req.body.name,
        age: req.body.age
    }
    users.push(newuser);
    res.status(201).send("User added successfully.");
});

// Read operation
app.get('/users',(req,res)=>{
    res.status(200).send(users);
});

//Update operation
app.put('/users/:id',(req,res)=>{
    const userId = Number(req.params.id);
    users=users.map((u)=>{
        if(u.id===userId){
            return {
                ...u,
                name: req.body.name,
                age: req.body.age
            }
        }else return u;
    });
   res.status(200).send("User updated successfully");
})

//Delete operation
app.delete('/users/:id',(req,res)=>{
    const userId=Number(req.params.id);
    users=users.filter((user)=>{
        if(user.id!==userId){
            return {...user}
        }
    });
    res.status(200).send("User deleted successfully");
})

app.listen(PORT,()=>{
    console.log(`Listening to PORT:${PORT}`);
})