const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');

const user = new UserController();

//class Based Application.
router.get('/create',function(req,res,next){
    user.create(req,res,next);
});
router.get('/show',function(req,res,next){
    user.show(req,res,next);
});


module.exports = router;