const express = require('express');

//************All Controller Start **********************/
const IndexController = require('../controller/IndexController');

//************All Controller End **********************/


const router = express.Router();

router.get('/',IndexController.index);

module.exports = router;
