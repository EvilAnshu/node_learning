const ProductModel = require('../model/ProductModel');
const path = require('path');
const fs = require('fs');

const ProductController = {
   getProducts : function(req,res,next){
    ProductModel.find({},(error,data)=>{
        if(error == null){
            if(typeof(data) == 'object'){
                if(Array.isArray(data)){
                  //  console.log(data);

                  if(data.length > 0){
                    res.status(200).json({
                        code : "201",
                        message: "Product Array Found Successfully",
                        status: true,
                        data:data,
                        error:false
                      });
                  }else{
                    res.status(404).json({
                        code : "404",
                        message: "No Record Found",
                        status: false,
                        data:[],
                        error:false
                      });
                  }

                  

                }else{
                   // console.log(data);
                   if(data.length > 0){
                    res.status(200).json({
                        code : "201",
                        message: "Product Object Found Successfully",
                        status: true,
                        data:data,
                        error:false
                      });
                  }else{
                    res.status(404).json({
                        code : "404",
                        message: "No Record Found",
                        status: false,
                        data:[],
                        error:false
                      });
                  }
                }
            }
        }
    })

    
      
     

   },
   createProducts:function(req,res,next){
    //console.log(req.body); :body-parser package
    ProductModelObject = new ProductModel(req.body);
    ProductModelObject.save((error,data)=>{
      if(error==null){
        //console.log('inserted Successfully');
        res.status(200).json({
          code:"201",
          message:"Record Inserted Successfully",
          status:true,
          data:data,
          error:false
        });
      }else{
        res.status(404).json({
          code:"404",
          message:"Oops , Something went wrong",
          status:false,
          data:[],
          error:false
        });
      }
    });
   },
   //get single products
   getSingleProduct:function(req,res,next){
      let ObjectId  = req.params.id;
      //console.log("id = "+ObjectId);
      ProductModel.findOne({_id:ObjectId},(error,data)=>{
        if(error==null){
          if(typeof(data) == 'object'){
              if(Array.isArray(data)){
                 //console.log('data is Array of Object');
              }else{
                //console.log('data is single Object');
                if(data == null){
                  //console.log('Invalid data');
                  res.status(404).json({
                    code:"404",
                    message:"No Record Found for Id"+ObjectId,
                    data:[],
                    status:false,
                    error:false,
                  
                  });


                }else{
                  res.status(200).json({
                    code:"201",
                    message:"Record Found for Successfully",
                    data:data,
                    status:true,
                    error:false,
                  
                  });
                  
                }

              }
          }else{
            console.log('Not A Valid Object');
          }
        }else{
          console.log('Exception Occured');
        } 
      })



      
   },//
   deleteSingleProduct:function(req,res,next){
      let ObjectId = req.params.id;

      ProductModel.deleteOne({_id:ObjectId},(error,data)=>{
        if(error ==null){
            res.status(200).json({
              code:"201",
              messsage:"Record Deleted Successfully",
              status:true,
              data:[],
              error:false,
            });
        }else{

          // console.log('Exception Occurred'+error);
          res.status(404).json({
            code:"404",
            messsage:"Cannot Delete Record",
            status:false,
            data:[],
            error:error,
          });
          
        }
      });

   },
   updateProduct:function(req,res,next){
       let ObjectId = req.params.id;
       ProductModel.findOne({_id:ObjectId},(error,data)=>{
          if(error == null){
            //Add validation Code for Object & Array
             //console.log(data);
             
             data.name = req.body.name;
             data.brand = req.body.brand;
             data.price = req.body.price;

             data.save((err)=>{
                     if(err == null){

                      res.status(200).json({
                        code:"201",
                        messsage:"Record Updated Successfully",
                        status:true,
                        data:data,
                        error:false,
                      });
                       
                     }else{

                      res.status(404).json({
                        code:"404",
                        messsage:"Cannot Update Record.",
                        status:false,
                        data:[],
                        error:false,
                      });

                     }
             })



          }else{
            console.log('Exception Occured !');
          }
       });
   },
   //Upload Method form
   uploadSingleImageForm:function(req,res,next){

    let indexPage = path.join(__dirname,'../pages/index.html');
    //Html page not recommended Rather we have to Pug/jade/ejs Engine.

    fs.readFile(indexPage,"utf-8",(error,data)=>{
         if(error == null ){
            res.send(data);
         }
    });
   },
   uploadFile:function(req,res,next){
    // console.log(req.file);

     if(req.file){
      let ext = req.file.originalname.split(".")[1];
      let targetFileName = req.file.filename+"."+ext;

      fs.rename(req.file.path,`${req.file.destination}/${targetFileName}`,(error)=>{
        res.send('File Uploaded Successfully and Renamed');
      });

      
     }
     

   }
}

module.exports = ProductController;


