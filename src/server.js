import express, { response } from "express";
import fs from 'fs/promises';

import config from "../src/config/config.js"
import usersRoute from "./routes/user.routes.js"

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





app.use("/",usersRoute);


app.listen(config.port,()=>{
    console.log(`Server is Running ${config.port}...`);
})