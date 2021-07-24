/**
 * File: 
 * Description: responsável pelas 'connectionStrings' da aplicação: PostgreSQL'.
 * Data: 20/07/2021
 * Author: Van Lopes
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// conexão com o banco de dados (postgres)
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
    console.log('Banco de Dados conectado com sucesso!');
});

module.exports = {
    query: (text, params) => pool.query(text.params)
};

