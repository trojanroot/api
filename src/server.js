import express, { response } from "express";
import fs from 'fs/promises';

import config from "../src/config/config.js"
const app= express();

app.get("/",(request,response)=>{
    response.send("Home page");
});

app.get("/about",(req,res)=>{
    res.send("About Page");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>Welcome to Contact Page.</h1>");
});

app.get("/users",async (req,res)=>{
    const users= await fs.readFile("../../data/user.json","utf-8");
    res.JSON(JSON.parse(users));
});

app.get("/users/:usersId",async (req,res)=>{
    const id=req.params.usersId;
    const users= await fs.readFile("../../data/user.json","utf-8");
    const user=JSON.parse(users).find((user)=>user.id==id);

    if(!user){
      return  res.send("User is not Found");
    }
    
    res.json(user);
})

app.listen(config.port,()=>{
    console.log(`Server is Running ${config.port}...`);
})