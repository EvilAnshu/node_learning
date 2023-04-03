const express = require('express');
const router = express.Router();
const IndexController = require('../controller/IndexController');

router.get('/',IndexController.home);
router.get('/contact',IndexController.contact);


module.exports = router;
