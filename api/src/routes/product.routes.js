// Descrição: responsável pelas rotas da api relacionado a classe 'Produto'.

const rota = require('express-promise-router')();
const controladorProduto = require('../controllers/product.controller');

// Definindo as rotas do CRUD - Produto:

// Rota responsável por CRIAR um novo Produto = (POST):
rota.post('/products', controladorProduto.criarProduto);

// Rota para LISTAR TODOS os Produtos = (GET):
rota.get('/products', controladorProduto.listarTdsProdutos)

// Rota para LISTAR um Produto pelo seu Id = (GET):
rota.get('/products/:id', controladorProduto.listarProdutoId);

// Rota para ATUALIZAR/EDITAR um Produto pelo seu Id = (PUT)
rota.put('/products/:id', controladorProduto.atualizarProduto);

// Rotapara DELETAR um Produto pelo seu Id = (DELETE):
rota.delete('/products/:id', controladorProduto.excluirProduto);

module.exports = rota;
