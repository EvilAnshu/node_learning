const fs = require("fs");


fs.readdir("./test_folder",(error,listFiles)=>{

 if(error == null){
    //console.log(listFiles);
    for(let i=0;i<listFiles.length;i++){
        if( listFiles[i].indexOf(".") > 0 ){
            console.log(`${listFiles[i]} is file.`);
        }else{
            console.log(`${listFiles[i]} is Folder.`);
        }
    }
 }
 
});


fs.readFile(__filename,"utf8",(error,data)=>{
   if(error == null){
     console.log(data);
   }
})




