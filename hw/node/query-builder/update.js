"use strict"

let dataobj = {
	"name =" : "anshu",
	", class =" : "btech"
}
let condition = {
	"id >" : 1,
	" and name =" : "anshu"
}
let sql = "";
const update = (tablename,dataobj,condition) =>
{
	const convertStr = (obj) =>
	{
		const keys = Object.keys(obj) //["name = ",", class = "]
		const arr = keys.map((data)=>{
			return (`${data} '${obj[data]}'`);
		})
		return arr.join("");
	}
	const dataStr = convertStr(dataobj);
	const conditionStr = convertStr(condition);
	sql = `UPDATE INTO ${tablename} SET ${dataStr} WHERE ${conditionStr}`;
}
update("student",dataobj,condition);
console.log(sql);
