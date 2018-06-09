const express = require('express');

const favoritosRouter = express.Router();

function router(nav) {
  favoritosRouter.route('/').get((req, res) => {
    res.render(
      'favoritos',
      {
        nav,
      },
    );
  });
  return favoritosRouter;
}

module.exports = router;
