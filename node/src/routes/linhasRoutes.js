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
    const query = 'SELECT linha.numero as numero, linha.nome as nome, linha_rua.nome_rua as nome_rua FROM linha_rua JOIN linha ON linha_rua.nro_linha = linha.numero WHERE linha_rua.nro_linha = ? ORDER BY ordem_rua ASC;SELECT DISTINCT horario.hora as hora, horario.dias_semana as dias_semana, horario.nome_rua as nome_rua FROM horario WHERE nro_linha = ? AND horario.dias_semana = "SEGUNDA-SEXTA" ORDER BY nome_rua,hora;SELECT DISTINCT horario.hora as hora, horario.dias_semana as dias_semana, horario.nome_rua as nome_rua FROM horario WHERE nro_linha = ? AND horario.dias_semana = "SABADOS" ORDER BY nome_rua,hora;SELECT DISTINCT horario.hora as hora, horario.dias_semana as dias_semana, horario.nome_rua as nome_rua FROM horario WHERE nro_linha = ? AND horario.dias_semana = "DOMINGOS/FERIADOS" ORDER BY nome_rua,hora;';
    mySqlConnection.query(query, [[req.params.id], [req.params.id], [req.params.id], [req.params.id]], (err, rows) => {
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
