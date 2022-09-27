var express = require('express');
var router = express.Router();
const productControl = require('../controller/productController');

/* GET users listing. */

router.get('/getProducts', productControl.getProducts);

router.post('/addProducts', productControl.addProducts);

module.exports = router;
