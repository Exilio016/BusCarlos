const express = require('express');
const mySqlConnection = require('../db/db');

const ruasRouter = express.Router();

function router(nav) {
  ruasRouter.route('/').get((req, res) => {
    mySqlConnection.query('SELECT * FROM rua', (err, rows) => {
      if (err) throw err;
      console.log(rows);
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
    // const { id } = req.params;
    res.render(
      // modify in the future for a specific assigned linha
      'ruas',
      {
        nav,
        // For future use, once the database is established
        // rua: rua[id],
      },
    );
  });
  return ruasRouter;
}

module.exports = router;
