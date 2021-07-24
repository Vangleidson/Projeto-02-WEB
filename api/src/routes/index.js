/**
 * File:
 * Description: responsável pela chamada das apis da aplicação.
 * Data: 20/07/2021
 * Author: Van Lopes
 */

const express = require('express');
const rota = express.Router();

rota.get('/api', (req, res) => {
    res.status(200).send({
        sucess: 'true',
        message: 'Bem-vindo(a)!',
        version: '1.0.0'
    })
});

module.exports = rota;