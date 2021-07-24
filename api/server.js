/**
 * File: server.js
 * Description: arquivo responsável por toda a configuração e execução da aplicação.
 * Data: 20/07/2021
 * Author: Van
 */

 const app = require('./src/app');
 const porta = process.env.PORT || 3000;
 
 app.listen(porta, () => {
     console.log('Aplicação executando na porta ', porta);
 });

