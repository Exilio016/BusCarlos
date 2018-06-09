const express = require('express');

const favoritosRouter = express.Router();

function router(nav) {
  favoritosRouter.route('/').get((req, res) => {
    res.render(
      'favoritos',
      {
        nav: [{ link: '/linhas', title: 'Busca por Linhas' },
          { link: '/referencias', title: 'Busca por Referencia' },
          { link: '/favoritos', title: 'Favoritos' },
          { link: 'feed', title: 'Feed de Noticias' }],
      },
    );
  });
  return favoritosRouter;
}

module.exports = router;
