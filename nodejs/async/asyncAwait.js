import fs from "fs/promises";

async function fetchData(){
   try{
    const user= await fs.readFile("../../data/user.json","utf-8");
    const post= await fs.readFile("../../data/posts.json","utf-8");
    const comments= await fs.readFile("../../data/comments.json","utf-8");
   console.log(user);
   console.log(post);
   console.log(comments);
   }
   catch(error){
    console.log(error);
   }finally{
    console.log("Final Code")
   }
}
fetchData();

const fetchAPIData = async ()=>{
   const rawData = await fetch("https://jsonplaceholder.typicode.com/todos");
   const data = await rawData.json();
   console.log(data);
};

fetchAPIData();