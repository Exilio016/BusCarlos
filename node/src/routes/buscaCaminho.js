const express = require('express');
const mySqlConnection = require('../db/db');

const caminhosRouter = express.Router();

function router(nav) {
  caminhosRouter.route('/').get((req, res) => {
    let orig = req.query.orig;
    let dest = req.query.dest;
    var query;

    if(orig === "" && dest === "")
     query = 'SELECT * FROM linha';
    else
      query = 'SELECT DISTINCT L.numero, L.nome FROM linha L, linha_rua r1, linha_rua r2 WHERE r1.nro_linha = L.numero AND r2.nro_linha = L.numero AND r1.ordem_rua < r2.ordem_rua AND r1.nome_rua LIKE ? AND r2.nome_rua LIKE ?';
    mySqlConnection.query(query, [['%'+orig+'%'], ['%'+dest+'%']], (err, rows) =>{
      if(err) throw err;
      console.log(rows);
      res.send(rows);
    })
  });
  return caminhosRouter;
}

module.exports = router;
