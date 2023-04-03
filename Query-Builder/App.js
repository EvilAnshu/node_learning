const fs = require('fs');
const qs = require('querystring');
const Query = require('./Query');


const app = (req,res)=>{
    res.writeHead(200,{
        "Content-Type":"text/html"
    });
    
    let filename = '';

    switch(req.url){

        case '/student-form':
            filename = 'index';
        break;

        case '/create-student':
            if(req.method.toUpperCase() == 'POST'){  

                req.on('data',(data)=>{
                   let studentData =qs.parse(data.toString());
                   console.log(Query.insertRecord('student',studentData));
                  
                });
         
            }else{
                res.write('page submiited with GET');
            }
           
            res.end();
        break;

        default:
            res.write('Welcome');
            res.end();
        break;

    }

    fs.readFile("./view/"+filename+".html",(error,data)=>{
       if(error == null){
           res.write(data);
           res.end();
       }
    });


    

}


module.exports = app;
