import fs from "fs/promises"

const fetchUsesr=()=>
new Promise((resolve,reject)=>{
    fs.readFile("../../data/user.json","utf-8",(error,data)=>{
    console.log(data);
    if(error){
        reject(error);
    }else{
        resolve(data);
    }
});
});
(async ()=>{ 
    const users= await fetchUsesr();
    console.log(users);
})
();