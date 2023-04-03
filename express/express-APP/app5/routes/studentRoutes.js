const express = require('express');
const router = express.Router();
const StudentController = require('../controller/StudentController');


router.get('/create',StudentController.create);
router.get('/delete',StudentController.delete);
router.get('/update',StudentController.update);



module.exports = router;