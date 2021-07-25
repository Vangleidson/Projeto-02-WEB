/**
 * File:
 * Description: responsável pelas rotas da api relacionado a classe 'Produto'.
 * Data: 20/07/2021
 * Author: Van Lopes
 */

const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/products', productController.createProduct);

// rota para selecionar todos os 'Products': (GET): localhost:3000/api/products
router.get('/products', productController.listAllProducts)

module.exports = router;
