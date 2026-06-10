import express from "express";
import { prismaClient } from "db/client";

const app = express();

app.use(express.json());

app.get("/users",async (req,res)=>{
    const users = await prismaClient.user.findMany();
    res.json({users:users});
})

app.post("/user",async (req,res)=>{
    const {name, password} = req.body;

    if(!name || !password){
        res.status(400).json({
            error:"username and password not found"
        });
        return;
    }
    const user = await prismaClient.user.create({
        data:{
            name,
            password
        }
    });
    if(user)
        return res.json({user: user, message:"User saved successfully"});
    res.json({user: user, message:"User saved unsuccessfull, Please try again!!"});
});

app.listen(8080);

console.log("Hello via Bun!");