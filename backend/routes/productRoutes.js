const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById } = require('../controller/productControllers');

//@desc  GET all products from db
//@routes GET /api/products
//@access Public
router.get('/', getAllProducts)

//@desc  GET a product by id from db
//@routes GET /api/product/:id
//@access Public
router.get('/:id', getProductById)

module.exports = router;