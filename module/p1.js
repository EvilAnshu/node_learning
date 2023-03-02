//wap in Js to show modularity 
//filename : p1.js
var x=10;
function App(){
return "App Function";
}

class Test{
display(){
console.log('display function from class');
}
}

//module.exports = x; // Over-write
//module.exports = App; //Over-Write
exports.x=x;
exports.App = App;
//Note :: module exports can export a variable once.

