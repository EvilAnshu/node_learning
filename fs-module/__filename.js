console.log(__filename); //global constant variable.

const path = require("path"); //path : module.

console.log(path.basename(__filename)); //with extension
console.log(path.basename(__filename,'.js')); //without extension

