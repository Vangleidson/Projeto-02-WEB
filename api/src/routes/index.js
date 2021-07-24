/**
 * File:
 * Description: responsável pela chamada das apis da aplicação.
 * Data: 20/07/2021
 * Author: Van Lopes
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure!',
    version: '1.0.0',
  });
});

module.exports = router;
