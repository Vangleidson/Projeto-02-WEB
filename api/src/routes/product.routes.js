// Descrição: responsável pelas rotas da api relacionado a classe 'Produto'.

const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');

// Definindo as rotas do CRUD - 'Produto':

// Rota responsável por criar um novo 'Produto': (POST): localhost:3000/api/products
router.post('/products', productController.createProduct);

// Rota para selecionar todos os 'Produto': (GET): localhost:3000/api/products
router.get('/products', productController.listAllProducts)

// Rota para selecionar um 'Produto' pelo seu 'ID': (GET): localhost:3000/api/products/:id
router.get('/products/:id', productController.findProductById);

// // Rota para atualizar/editar um 'Produto' pelo seu 'ID': (GET): localhost:3000/api/products/:id
// router.update('/products/:id', productController.updateProductById);

// // Rotapara deletar um 'Produto' pelo seu 'ID': (GET): localhost:3000/api/products/:id
// router.delete('/products/:id', productController.deleteProductById);

module.exports = router;
