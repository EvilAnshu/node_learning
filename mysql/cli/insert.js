const mysql = require("mysql");
const config = require("./config/config.json");

const connection = mysql.createConnection(config.dbconfig.mysql);

try{
    connection.connect();
   // console.log('Connection Created success');

//    createStudent(connection,'Shivam','MBA','60'); //
//    createStudent(connection,'Aman','BA','100');
//    createStudent(connection,'Aman Pandey','Bsc','80');
createStudent(connection,'Awnish Kumar','LKG','00'); //PK = 9+1 = 7 //1



}catch(error){
    console.log('Connection Error'+error);
}
connection.end();


function createStudent(connection,name,clss,marks){

    let sql = `INSERT INTO student(name,class,marks) values('${name}','${clss}','${marks}')`;
    connection.query(sql,(error,result)=>{
        if(error == null){
          console.log('data inserted successfully','Inserted Id ='+result.insertId);
          console.log('data inserted successfully','Affected Rows Id ='+result.affectedRows);
        }
    })
}