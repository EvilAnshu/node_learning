class UserController{
  

   constructor(){
    //super()
   }

   create(req,res,next){
    res.send('user controller method create:class based');
   }

   show(req,res,next){
    res.send('user controller method show:class based');
   }

}

module.exports = UserController;
