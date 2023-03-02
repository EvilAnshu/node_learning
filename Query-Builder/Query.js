"use strict";

function insert(tablename,dataObject){
   if(insert==''){
	   console.log('Tablename is required.');
   }
   
   let sql = "";
   let columArr = Object.keys(dataObject);
   let valuesArr = Object.values(dataObject);
   let column_str = columArr.join(",");
   let values_str = valuesArr.join("','")
   sql = sql + `INSERT INTO ${tablename}(${column_str}) values('${values_str}')`;
   console.log(sql);
}

// insert('student',{
		// 'name':'Amit', 
		// 'class':'LKG', 
		// 'marks':'50', 
// });

// insert('users',{
		// 'id':1, 
		// 'name':'sumit', 
		// 'gender':'male', 
		// 'email':'sumit@yahoo.com',
		// 'password':'sumit@123',
		// 'mobile':'9876543210',
		// 'gf':'NA',
		// 'isMarried':'Yes',
		// 'crush':'sunny',
// });


function deleteRecord(tablename,param){ //
	
	let sql="";
	let pk = Object.keys(param); //key-1 ['std_id']
	let pk_values = Object.values(param); //1,2,3,4,5,6,..
	let pk_str = pk_values.join("','");
	
	sql = sql + `DELETE FROM ${tablename} where ${pk[0]} in ('${pk_str}')`;
	console.log(sql);
	
}

// deleteRecord('student',{
   // 'std_id':[1,2,3,4,5,6,7,8,9]
// });
// deleteRecord('user',{
   // 'id':[1001]
// })

// deleteRecord('order',{
   // 'order_id':['ord_110168292']
// })

updateRecord('student',{
	'name':'sumit',
	'class':'12th',
	'marks':50,
},{
	'id':">='1' OR",
	'mobile':"='9876543210'"
})















