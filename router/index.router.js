const express = require('express');
const router = express.Router();
const indexController = require('../controller/index.controller');
const userController = require('../controller/user.controller');
const profileController = require('../controller/profile.controller');
const productController = require('../controller/product.controller');
const orderController = require('../controller/order.controller');

router.get('/', indexController.getindex);
router.get('/user', userController.getallUser);
router.post('/login', userController.logInUser);
router.get('/profile/:id', profileController.profileById);
router.get('/product', productController.proAllProduct);
router.get('/product/:id', productController.proProductById);
router.get('/order', orderController.getAllOrder);
router.get('/order/:id', orderController.getByIdOder);

module.exports = router;