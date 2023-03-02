const os = require('os');
//console.log(os);

console.log('End of Line = ',JSON.stringify(os.EOL));
//console.log('Constant Object = ',os.constants);
console.log('Free Memory = ',os.freemem());

os['constant'] = null;
console.log(os);

console.log('Architecture of Os : ',os.arch());
console.log('No of Cpus : ',os.cpus());
console.log('Hostname : ',os.hostname());
console.log('Avg Load of Machine : ',os.loadavg());
console.log('Total Memory : ',os.totalmem());
console.log('Os Type : ',os.type());
console.log('Release : ',os.release());
console.log('Os Platform : ',os.platform());
console.log('Temporary Path : ',os.tmpdir());
console.log('Home Path : ',os.homedir());
console.log('Priority : ',os.getPriority());

let consumedMemory = os.totalmem() - os.freemem();
let result = consumedMemory / os.totalmem();
console.log('Effeciency/performance/tolerance/latency : ',result);
console.log('slow rate : ',(1-result));