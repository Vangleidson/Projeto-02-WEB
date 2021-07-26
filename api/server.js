// Description: arquivo responsável por toda a configuração e execução da aplicação.

const app = require('./src/app');

const porta = process.env.PORT || 3000;

app.listen(porta, () => {
  console.log('Aplicação executando na porta: ', porta);
});
