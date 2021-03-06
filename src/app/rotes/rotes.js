const LivroDao = require('../infra/livro-dao');

const db = require('../../config/database');
module.exports = function (app) {

  app.get('/', function (res, resp) {
    resp.send(
      `
        <html lang="pt-br">
          <head>
            <title>Título da página</title>
              <meta charset="utf-8">
          </head>
          <body>
            Aqui vai o código HTML que fará seu site aparecer.
          </body>
        </html>
        `
    );
  });

  app.get('/livros/form', function (req, resp) {
    resp.marko(require('../views/livros/form/form.marko'))
  });

  app.get('/livros', function (req, resp) {

    const livroDao = new LivroDao(db);
    livroDao.lista()
      .then(livros => resp.marko(
        require('../views/livros/lista/lista.marko'),
        {
          livros: livros
        }
      ))
      .catch(erro => console.log(erro));
  });

  app.post('/livros', function (req, resp) {
    console.log(req.body);
    const livroDao = new LivroDao(db);
    livroDao.adiciona(req.body)
      .then(resp.redirect('/livros'))
      .catch(erro => console.log(erro));
  });

};