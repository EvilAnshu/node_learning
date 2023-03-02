import {createRequire} from "module";
const require = createRequire(import.meta.url);

const fs = require("fs");
fs.stat(__filename,(error,fileInfo)=>{

  console.log(fileInfo);
});

//wrapper exist does not exist;
//(function(exports,require,module,__filename,__dirname));
