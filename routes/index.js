const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController');

router.get('/',mainController.home);

router.post('/products/create',mainController.create);

router.get('/products',mainController.productsList);

router.delete('/products/:id',mainController.delProduct);

router.post('/products/:id/update_quantity',mainController.updateProduct);

module.exports = router;
