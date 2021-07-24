/**
 * File: app.js
 * Description: responsável por fazer a comunicação entre servidor e aplicação.
 * Data: 20/07/2021
 * Author: Van Lopes
 */

const express = require('express');
const cors = require('cors');

const app = express();

// rotas
const index = require('./routes/index');
// const produtoRoute = require('./routes/product.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'aplication/vnd.api+json' }));
app.use(cors());

app.use(index);
// app.use('/api/', produtoRoute);

module.exports = app;
