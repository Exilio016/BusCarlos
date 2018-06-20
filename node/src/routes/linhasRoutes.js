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
    // const { id } = req.params;
    res.render(
      // modify in the future for a specific assigned linha
      'linhas',
      {
        nav,
        // For future use, once the database is established
        // linha: linhas[id],
      },
    );
  });
  return linhasRouter;
}

module.exports = router;
