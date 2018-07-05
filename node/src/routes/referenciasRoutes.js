const express = require('express');
const mySqlConnection = require('../db/db');
const referenciasRouter = express.Router();

function router(nav) {
  referenciasRouter.route('/').get((req, res) => {
    mySqlConnection.query('SELECT nome, foto FROM ponto_ref', (err, rows) => {
      if (err) throw err;
      console.log(rows);
      res.render(
        'referencias',
        {
          rows,
          nav,
        },
      );
    });
  });

  referenciasRouter.route('/:id').get((req, res) => {
    const query = 'SELECT DISTINCT lr.nro_linha, l.nome as nome, r.nome as nome_rua FROM ponto_ref r JOIN ref_rua rf ON r.nome = rf.nome_ref JOIN linha_rua lr ON lr.nome_rua = rf.nome_rua JOIN linha l ON l.numero = lr.nro_linha WHERE r.nome = ? ORDER BY lr.nro_linha';
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
  return referenciasRouter;
}

module.exports = router;
