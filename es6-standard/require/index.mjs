
const fs = require("fs");

fs.stat("index.mjs",(error,fileInfo)=>{
    console.log(fileInfo);
})



/****
import fs from "fs";

fs.stat("index.mjs",(error,fileInfo)=>{
    console.log(fileInfo);
});

***/


