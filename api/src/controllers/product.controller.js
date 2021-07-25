/**
 * File:
 * Description: responsável pela lógica do CRUD da API 'Produto'.
 * Data: 20/07/2021
 * Author: Van Lopes
 */

const db = require('../config/database');

// ==> Método responsável por criar um novo 'Product':
exports.createProduct = async (req, res) => {
  const { product_name, quantity, price } = req.body;
  const { rows } = await db.query(
    'INSERT INTO products (product_name, quantity, price) VALUES ($1, $2, $3)',
    [product_name, quantity, price],
  );

  res.status(201).send({
    message: 'Product added successfully!',
    body: {
      product: { product_name, quantity, price },
    },
  });
};

// Método responsável por selecionar todos os 'Products'
exports.listAllProducts = async(req, res) => {
  const response = await db.query('SELECT * FROM products');
  res.status(200).send(response.rows);
};