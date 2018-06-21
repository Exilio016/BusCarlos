const express = require('express');
const mySqlConnection = require('../db/db');

const linhasRouter = express.Router();

function router(nav) {
  linhasRouter.route('/').get((req, res) => {
    mySqlConnection.query('SELECT * FROM linha', (err, rows) => {
      if (err) throw err;
      console.log(rows);
      res.render(
        'linhas',
        {
          rows,
          nav,
        },
      );
    });
  });

  linhasRouter.route('/:id').get((req, res) => {
    const query = 'SELECT linha.numero as numero, linha.nome as nome, linha_rua.nome_rua as nome_rua FROM linha_rua JOIN linha ON linha_rua.nro_linha = linha.numero WHERE nro_linha = ? ORDER BY ordem_rua ASC';
    mySqlConnection.query(query, [req.params.id], (err, rows) => {
      if (err) throw err;
      res.render(
        'linha',
        {
          rows,
          nav,
        },
      );
    });
  });
  return linhasRouter;
}

module.exports = router;
