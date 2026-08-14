import fs from 'fs/promises'

const getUsers=async()=>{
    const users= await fs.readFile("../../data/user.json","utf-8");
     return users;
};

const getUserByID=async()=>{
    const users= await fs.readFile("../../data/user.json","utf-8");
    const user=JSON.parse(users).find((user)=>user.id==id);
    return user;
};

export default {getUsers,getUserByID};