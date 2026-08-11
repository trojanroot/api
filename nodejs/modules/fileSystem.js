import fs from "fs";

// Synchronous: Blocking operation
// Asynchronous: Non-blocking operation

// Read
const result =fs.readFileSync("../../data/note.txt","utf8");//Synchronous
console.log(result);
console.log("File read sucessfully");
fs.readFile("../../data/note.txt","utf8",(error,data)=>{              
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
});
console.log("File readed twice");


// Write
fs.writeFileSync("../../data/note.txt","New file is made and file are entered");

fs.writeFile("../../data/note.txt",
    "Data from asyn.",
    (error,data)=>{
    console.log("File Written successfully.");
},
);


// Update/Append
fs.appendFileSync("../../data/note.txt","This a append File");
fs.appendFile("../../data/note.txt","This is append from async",()=>{});
fs.appendFileSync("../../data/user.json",JSON.stringify([{name:"Ram"},{name:"hari"},{name:"sita"}]),
);

// Delete
// fs.rm("../../data/user.json");
// fs.rmSync("../../data/user.json");