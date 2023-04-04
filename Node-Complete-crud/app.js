const express = require('express');
const IndexRoute = require('./routes/IndexRoute');
const  ProductRoute = require('./routes/ProductRoute');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

app.use('/',IndexRoute);
app.use('/products',ProductRoute); //products/


module.exports = app;
