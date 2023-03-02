const fs = require("fs");

fs.rename("sample.txt","New_sample.pdf",(error)=>{

 if(error == null){
    console.log('File Renamed Successfully');
 }
 
});
