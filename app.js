const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const linhasRouter = express.Router();
const referenciasRouter = express.Router();
const favoritosRouter = express.Router();
const feedRouter = express.Router();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));
app.use('/linhas', linhasRouter);
app.use('/referencias', referenciasRouter);
app.use('/favoritos', favoritosRouter);
app.use('/feed', feedRouter);

app.set('views', './src/views');
app.set('view engine', 'ejs');

linhasRouter.route('/').get((req, res) => {
  res.render(
    'linhas',
    {
      nav: [{ link: '/linhas', title: 'Busca por Linhas' },
        { link: '/referencias', title: 'Busca por Referencia' },
        { link: '/preferidos', title: 'Favoritos' },
        { link: 'feed', title: 'Feed de Noticias' }],
    },
  );
});

referenciasRouter.route('/').get((req, res) => {
  res.render(
    'referencias',
    {
      nav: [{ link: '/linhas', title: 'Busca por Linhas' },
        { link: '/referencias', title: 'Busca por Referencia' },
        { link: '/favoritos', title: 'Favoritos' },
        { link: 'feed', title: 'Feed de Noticias' }],
    },
  );
});

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

feedRouter.route('/').get((req, res) => {
  res.render(
    'feed',
    {
      nav: [{ link: '/linhas', title: 'Busca por Linhas' },
        { link: '/referencias', title: 'Busca por Referencia' },
        { link: '/preferidos', title: 'Favoritos' },
        { link: 'feed', title: 'Feed de Noticias' }],
    },
  );
});

app.listen(port, () => debug('listening on port '.concat(port)));
