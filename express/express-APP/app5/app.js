const express = require('express');
const app = express();
const path = require('path');

const indexRoute = require('./routes/routes');
const studentRoute = require('./routes/studentRoutes');
const userRoute = require('./routes/userRoutes');

app.use('/',indexRoute);
app.use('/student',studentRoute);
app.use('/users',userRoute);

//For Handling Error Pages
app.use('*',(req,res,next)=>{

    res.status(404);
    let error_page = path.join(__dirname,"/pages/error.html");
    res.sendFile(error_page);

});


module.exports = app;
