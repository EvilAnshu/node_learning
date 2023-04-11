const express = require('express');
const multer = require('multer');

//************All Controller Start **********************/
const ProductController = require('../controller/ProductController');

//************All Controller End **********************/


const router = express.Router();

//File Uploading GET Request for form.

const upload = multer({dest:"public/uploads"});

router.get('/upload',ProductController.uploadSingleImageForm);
router.post('/upload',upload.single('pic'),ProductController.uploadFile);
router.get('/search',ProductController.searchProduct);

router.get('/',ProductController.getProducts);
router.get('/:id',ProductController.getSingleProduct);
router.post('/create',ProductController.createProducts);
router.put('/:id',ProductController.updateProduct);
router.delete('/:id',ProductController.deleteSingleProduct);



module.exports = router;
