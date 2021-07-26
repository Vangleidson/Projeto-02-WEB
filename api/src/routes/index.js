// Descrição: responsável pela chamada das APIs da aplicação.

const express = require('express');

const rota = express.Router();

rota.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Bem-vindo(a) a API Node.js + PostgreSQL - Vangleidson Lopes',
    version: '1.0.0',
  });
});

module.exports = rota;
