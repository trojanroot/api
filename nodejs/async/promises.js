// Promise => Future value
// Pending - Resolved, Reject, Finally


import fs from "fs/promises"
fs.readFile("../../data/user.json","utf-8")
    // resolved case uses then 
    .then((users)=>{
        console.log(users);

        return fs.readFile("../../data/posts.json","utf8");
    })
    .then((posts)=>{
        console.log(posts);
        return fs.readFile("../../data/comments.json","utf8");
    })
    .then((comments)=>{
        console.log(comments);
    })
    //reject case uses catch
    .catch((error)=>{
        console.log(error);
    })
    
.finally(()=>{
    console.log("Finally");
});