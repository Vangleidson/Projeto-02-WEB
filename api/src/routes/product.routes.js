// Descrição: responsável pelas rotas da api relacionado a classe 'Produto'.

const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');

// Definindo as rotas do CRUD - Produto:

// Rota responsável por CRIAR um novo Produto = (POST):
router.post('/products', productController.createProduct);

// Rota para LISTAR TODOS os Produtos = (GET):
router.get('/products', productController.listAllProducts)

// Rota para LISTAR um Produto pelo seu Id = (GET):
router.get('/products/:id', productController.findProductById);

// Rota para ATUALIZAR/EDITAR um Produto pelo seu Id = (PUT)
router.put('/products/:id', productController.updateProductById);

// Rotapara DELETAR um Produto pelo seu Id = (DELETE):
router.delete('/products/:id', productController.deleteProductById);

module.exports = router;
