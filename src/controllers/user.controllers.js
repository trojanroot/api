import fs from 'fs/promises';
import userServices from '../services/user.services.';

const getUsers=async (req,res)=>{
    const users=await userServices.getUsers();
    res.JSON(JSON.parse(users));
};

const getUserByID=async (req,res)=>{
    const id=req.params.usersId;
    const users= await userServices.getUserByID(id);
    if(!user){
      return  res.send("User is not Found");
    }
    
    res.json(user);
};

export default {getUsers,getUserByID};
 