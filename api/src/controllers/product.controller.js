// Descrição: responsável pela lógica do CRUD da API 'Produto'.

const { parse } = require('dotenv');
const db = require('../config/database');

// Função responsável por criar um novo Produto:
exports.criarProduto = async (req, res) => {
  const { product_name, quantity, price } = req.body;
  const { rows } = await db.query(
    'INSERT INTO products (product_name, quantity, price) VALUES ($1, $2, $3)',
    [product_name, quantity, price],
  );

  res.status(201).send({
    message: 'Produto criado com sucesso!',
    body: {
      product: { product_name, quantity, price },
    },
  });
};

// Função responsável por LISTAR TODOS os Produtos:
exports.listarTdsProdutos = async(req, res) => {
  const response = await db.query('SELECT * FROM products');
  res.status(200).send(response.rows);
};

// Função responsável por LISTAR um Produto pelo seu Id:
exports.listarProdutoId = async(req, res) => {
  const productId = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM products WHERE productId = $1', [productId]); // $1 - indica que estamos buscando na primeira coluna(productId) da tabela 'Products'.
  res.status(200).send(response.rows);
};

// Função responsável por ATUALIZAR/EDITAR um Produto pelo seu Id:
exports.atualizarProduto = async(req, res) => {
  const productId = parseInt(req.params.id);
  const { product_name, quantity, price } = req.body;

  const response = await db.query('UPDATE products SET product_name = $1, quantity = $2, price = $3 WHERE productId = $4', [product_name, quantity, price, productId]);
  res.status(200).send({ message: 'Produto atualizado com sucesso!' });
};

// Função responsável por DELETAR um Produto pelo seu ID:
exports.excluirProduto = async (req, res) => {
  const productId = parseInt(req.params.id);
  await db.query('DELETE FROM products WHERE productId = $1', [productId]);

  res.status(200).send({ message: 'Produto excluído com sucesso!', productId });
};
