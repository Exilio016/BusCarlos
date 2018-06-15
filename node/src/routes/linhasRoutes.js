const express = require('express');

const linhasRouter = express.Router();

function router(nav) {
  linhasRouter.route('/').get((req, res) => {
    res.render(
      'linhas',
      {
        nav,
      },
    );
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
