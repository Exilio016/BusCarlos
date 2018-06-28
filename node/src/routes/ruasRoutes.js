const express = require('express');
const mySqlConnection = require('../db/db');

const ruasRouter = express.Router();

function router(nav) {
  ruasRouter.route('/').get((req, res) => {
    mySqlConnection.query('SELECT * FROM rua', (err, rows) => {
      if (err) throw err;
      res.render(
        'ruas',
        {
          rows,
          nav,
        },
      );
    });
  });

  ruasRouter.route('/:id').get((req, res) => {
    const query = 'SELECT lr.nro_linha, l.nome as nome, lr.nome_rua AS nome_rua FROM linha_rua lr JOIN linha l ON l.numero = lr.nro_linha WHERE lr.nome_rua = ? ORDER BY lr.nro_linha';
    mySqlConnection.query(query, [req.params.id], (err, rows) => {
      if (err) throw err;
      res.render(
        'rua',
        {
          rows,
          nav,
        },
      );
    });
  });
  return ruasRouter;
}

module.exports = router;
